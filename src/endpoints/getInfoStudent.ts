import {Request, Response} from 'express'
import selectInfoStudent from '../data/selectInfoStudent'

export const getInfoStudent = async(req: Request, res: Response): Promise<void> =>{
    try {
        const id: string = req.params.id
    
        const student = await selectInfoStudent(id)
        const {name, birthDate} = student[0]

        const date = new Date(birthDate).getFullYear()
        const today = new Date(Date.now()).getFullYear()
        // const age =  today - date.getFullYear()
        const age = Number(today) - Number(date)
        
        


        const infoStudent = `O Estudante ${name} e possui ${age} anos de idade`

        res.status(200).send(infoStudent)

        
    } catch (error) {
        res.status(404).send({message: "Não encontrei esse estudante"})
    }
}