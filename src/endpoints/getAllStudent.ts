import {Request, Response} from 'express'
import sellectAllStundet from '../data/sellectAllStundet'

export const getALlStudent = async(req:Request, res: Response): Promise<void> =>{
    try {
        const student = await sellectAllStundet()

        res.status(200).send(student)
    } catch (error) {
        res.send(error.message)
    }
}