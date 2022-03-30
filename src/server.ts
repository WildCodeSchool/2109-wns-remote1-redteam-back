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

app.post('/login', async (req, res) => {
  
  try {
    const user = await User.findOne({ name :req.body.name });
    if(!user) return res.send({ message: "invalid credentials"}).status(400)

    const result = await bcrypt.compare(req.body.password, user.password);
    if(!result) return res.send({ message: "invalid credentials"}).status(400)
    const payload = {
      id: user._id,
      name: req.body.name,
    }
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn : "24h"});
    return res.send({
      token: token,
      message: "Connected",
    })
  }catch (e) {
      return res.send({
        message: "Une erreur est survenue",
        error: e
      }).status(500);
  }
}); 

app.post('/signup', async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if(user) return res.send({message: "user already exist"}).status(400)
    const password = await bcrypt.hash(req.body.password, 8);
    await new User({...req.body, password }).save();
    return res.send({message: "user create"}).status(200);
  }catch (e) {
      return res.send({
          message: "Une erreur est survenue",
          error: e
        }).status(500);
  }
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

