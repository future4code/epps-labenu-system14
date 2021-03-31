import {Request, Response} from 'express'
import {addStudentToClass} from '../data/addStudentToClass'
import { addStudents } from '../type'

export const addStudent = async(req: Request, res: Response) =>{
    try {
        const studentToClass: addStudents = {
            id: req.body.id,
            studentId: req.body.student,
            classId: req.body.class
            
        }
        console.log(studentToClass.studentId)
     
      
        const add = await addStudentToClass(studentToClass)
        res.status(200).send('Estudante adicionado na turma')

    } catch (error) {
        res.status(400).send(error.message)
    }
}