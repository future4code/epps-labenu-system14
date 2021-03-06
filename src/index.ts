import app from "./app";
import { addStudent } from "./endpoints/addStudent";
import { addTeacher } from "./endpoints/addTeacher";
import  { newClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getALlStudent } from "./endpoints/getAllStudent";
import { getInfoStudent } from "./endpoints/getInfoStudent";
import { getStudantByClass } from "./endpoints/getStudantByClass";
import { getTeacherByClass } from "./endpoints/getTeacherByClass";


app.get('/student', getALlStudent)
app.post('/student', createStudent)
app.get('/stundet/info/:id', getInfoStudent)
app.post('/teacher', createTeacher)
app.post('/class', newClass)
app.post('/class/addstudent', addStudent)
app.post('/class/addTeacher',addTeacher)
app.get('/class/student/:name', getStudantByClass)
app.get('/class/teacher/:name', getTeacherByClass )