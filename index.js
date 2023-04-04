import { addNewAnimal } from "./src/animals.js";

import express  from "express";
import cors from 'cors';

const PORT = 3002

const app = express()
app.use(cors())
app.use(express.json()) // tells express that our POSTS will be JSON

// app.get('/animals',getAllAnimals)
app.post('/animals',addNewAnimal)
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})