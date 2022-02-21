import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { port, DB_PORT_URL } from './settings';
import  typeDefs  from './schema/typeDefs';
import  resolvers  from './resolvers';

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

