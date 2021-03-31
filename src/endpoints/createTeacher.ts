import {Request, Response} from 'express'
import { createUser } from '../type'
import create from '../data/create'

export const createTeacher = async(req:Request, res: Response): Promise<void> =>{
    try {
        const createTeacher:createUser ={
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            birthDate: req.body.birthDate
        }
        const student = await create(createTeacher, "teacher")
        

        res.status(200).send({
            message: "Professor criado com sucesso"
        })
        
    } catch (error) {
        res.send(error.message)
    }
}
