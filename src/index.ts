import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { getALlStudent } from "./endpoints/getAllStudent";


app.get('/student', getALlStudent)

app.post('/student', createStudent)
