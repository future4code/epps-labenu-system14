import app from "./app";
import  { newClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getALlStudent } from "./endpoints/getAllStudent";


app.get('/student', getALlStudent)

app.post('/student', createStudent)
app.post('/teacher', createTeacher)
app.post('/class', newClass)