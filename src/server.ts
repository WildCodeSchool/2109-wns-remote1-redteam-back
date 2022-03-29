import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ApolloServer } from 'apollo-server-express';
import { port, DB_PORT_URL, JWT_SECRET } from './settings';
import  typeDefs  from './schema/typeDefs';
import  resolvers  from './resolvers';
import User from './api/user/models/User';

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(DB_PORT_URL)
  .then(() => console.log('Connect to Database ✅'))
  .catch((err) => console.log('Oops, connection failed', err))


app.get('/api/dummy-endpoint', (req, res) =>
  res.send({
    message: 'Hello from the backend',
  })
);

// 1 - Récupérer les infos de l'utilisateur
// 2 - Vérifier si l'utilisateur existe en base de donnée
// 3 - Si l'utilisateur n'existe pas on send une erreur
// 4 - Si il existe comparer les mdp
// 5 - Retourner le JWT lorsque le user existe et que le mot de passe est le bon

app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
  const user = await User.findOne({ username });
  if(!user) return res.send({ message: "invalid credentials"})

  const result = await bcrypt.compare(password, user.password);
  if(!result) return res.send({ message: "invalid credentials"})

  const payload = {
    id: user._id,
    username: username,
  }
  
  const token = jwt.sign(payload, JWT_SECRET, {expiresIn : "24h"});
  return res.send({
    token: token,
    message: "Connected",
  })
}); 


// 1 - Récupérer les infos de l'utilisateur
// 2 - Vérifier si l'utilisateur existe en base de donnée
// 3 - Si l'utilisateur existe on send une erreur
// 4 - Si l'utilisateur n'existe pas on send l'objet avec l'utilisateur (creation)
app.post('/signup', async (req, res) => {
  const user = req.body;
  const userVerif = await User.findOne({email: user.email});
  console.log(userVerif);
  if(userVerif) return res.send({message: "user already exist"}).status(400)
  const password = await bcrypt.hash(user.password, 8);
   // Constituer ton User
  const userDb = new User({...user, password });

   // Sauvergarder ton User 
   await userDb.save()
  return res.send({message: "user create"}).status(200);
  
  

})

// Provide resolver functions for your schema fields

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const startServer = async () => {
  await server.start();
  await server.applyMiddleware({app});
}

startServer()

app.listen(port, () => console.log(`listening on ${port}`));

