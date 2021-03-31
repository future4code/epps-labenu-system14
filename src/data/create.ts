import connection from '../connection'
import { createUser } from '../type';

export default async function create(user: createUser, table: string){

    const {id,name, email, birthDate} = user

    await connection.insert({
        id,
        name,
        email,
        birthDate
    }).into(`${table.toUpperCase()}`)
    
    
}