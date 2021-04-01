import {Request, Response} from 'express'
import teacherClass from '../data/teacherClass'

export const getTeacherByClass = async(req: Request, res: Response):Promise<void> =>{
    try {
        const name = req.params.name

        const classes = await teacherClass(name)

        res.status(200).send(classes)
        
    } catch (error) {
        res.status(404).send({message: 'Não Encontrei essa turma'})
    }
}