import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express'; 
import schema from './schema/index';
import { createServer } from 'http';


//import {graphqlHTTP} from 'express-graphql';

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

/*app.use('/', graphqlHTTP({
    schema,
    graphiql: true,
}));*/
    
const PORT = process.env.PORT || 4000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}${server.graphqlPath}`);
});