import {Request, Response} from 'express'
import {addStudentToClass} from '../data/addStudentToClass'
import { relationship } from '../type'

export const addStudent = async(req: Request, res: Response) =>{
    try {
        const studentToClass: relationship = {
            id: Date.now(),
            studentId: req.body.student,
            classId: req.body.class
        }
        
     
      
        const add = await addStudentToClass(studentToClass)
        res.status(200).send('Estudante adicionado na turma')

    } catch (error) {
        res.status(400).send(error.message)
    }
}