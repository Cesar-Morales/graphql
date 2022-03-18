import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

const PORT = 3000
const httpServer = createServer(app);
httpServer.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});