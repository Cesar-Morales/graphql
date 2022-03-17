import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema/index';
import {graphqlHTTP} from 'express-graphql';

const app = express();

app.use(cors());

app.use(compression());


app.use('/', graphqlHTTP({
    schema,
    graphiql: true,
}));
    
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/graphql`);
});