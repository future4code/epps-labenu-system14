import {Request, Response} from 'express'
import { createUser } from '../type'
import create from '../data/create'

export const createStudent = async(req:Request, res: Response): Promise<void> =>{
    try {
        const createStudent:createUser ={
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            birthDate: req.body.birthDate
        }
        const student = await create(createStudent, "student")
        

        res.status(200).send({
            message: "Estudante criado com sucesso"
        })
        
    } catch (error) {
        res.send(error.message)
    }
}
