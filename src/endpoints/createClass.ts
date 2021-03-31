import {Request, Response} from 'express'
import { createClass, PERIOD } from '../type'
import createTeam from '../data/createClass'
export const newClass = async(req: Request, res: Response) =>{
    try {
        const team: createClass ={
            id: Date.now().toString(),
            name: req.body.name,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            module: req.body.module,
            period: req.body.period
        }

        const classroom  = await createTeam(team)
        res.status(200).send("Turma criada com sucesso")
        
    } catch (error) {
        res.send(error.message)
    }
}