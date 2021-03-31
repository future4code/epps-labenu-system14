import connection from '../connection'
import { createClass } from '../type';


export default async function createTeam(team:createClass) {
    const {id, name, startDate, endDate, module, period} = team

    await connection.insert({
        id,
        name,
        startDate,
        endDate,
        module,
        period
    }).into('CLASS')
    
}