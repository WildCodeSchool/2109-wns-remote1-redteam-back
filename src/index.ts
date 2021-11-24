import express from 'express';
import cors from 'cors';
import { port, db_port } from './settings';
import mongoose from 'mongoose';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers'

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(db_port)
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

