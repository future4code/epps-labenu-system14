import {Request, Response} from 'express'
import studantClass from '../data/studantClass'

export const getStudantByClass = async(req: Request, res: Response):Promise<void> =>{

    try {
        const name = req.params.name

        const classes = await studantClass(name)

        res.status(200).send(classes)
        
    } catch (error) {
        res.status(404).send({message: 'Não encontrei essa turma'})
    }
}