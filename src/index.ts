import app from "./app";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getALlStudent } from "./endpoints/getAllStudent";


app.get('/student', getALlStudent)

app.post('/student', createStudent)
app.post('/teacher', createTeacher)
