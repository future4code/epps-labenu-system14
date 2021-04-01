import connection from '../connection'

export default async function sellectAllStundet():Promise<any>{
    const result = await connection
    .select('*')
    .from("STUDENT")

    return result
}