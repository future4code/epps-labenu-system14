import {Request, Response} from 'express'
import { addTeacherToClass } from '../data/addTeacherToClass'

import { relationship } from '../type'

export const addTeacher = async(req: Request, res: Response) =>{
    try {
        const teacherClass: relationship = {
            id: req.body.id,
            teacherId: req.body.teacher,
            classId: req.body.class
        }
      
        const add = await addTeacherToClass(teacherClass)
        res.status(200).send('Professor adicionado na turma')

    } catch (error) {
        res.status(400).send(error.message)
    }
}