import express from 'express'
import cors from 'cors';
import stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';


const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('hello world!')
})

// listen
const PORT = 8282 || 3000

app.listen(PORT, () => {
    console.log(`listening at port : ${PORT}`)
})