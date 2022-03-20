import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import ExpressPlaygroundMiddleware from 'graphql-playground-middleware-express';

const app = express();

app.use(cors());
app.use(compression()); 

const server = new ApolloServer({
    schema,
    introspection: true
});

server.start().then(res => {
    server.applyMiddleware({app});
});

app.get('/', ExpressPlaygroundMiddleware({
    endpoint: '/graphql'
}));

const PORT = 3000
const httpServer = createServer(app);
httpServer.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});