import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import {graphqlHTTP} from 'express-graphql';

const app = express();

app.use(cors());

app.use(compression());

const  typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCUrsoGraphQL: String!
    }
`;

const resolvers : IResolvers = {
    Query: {
        hola(): string{
            return 'Hola mundo';   
        },
        holaConNombre(__:void, { nombre }) : string{
            return `Hola ${nombre}`;
        },
        holaAlCUrsoGraphQL: () => 'Hola al curso de GraphQL'
    }
};

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

app.use('/', graphqlHTTP({
    schema,
    graphiql: true,
}));
    
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}/graphql`);
});