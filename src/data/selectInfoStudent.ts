import connection from '../connection'

export default async function selectInfoStudent(id: string):Promise<any>{
    const result = await connection.raw(`
        SELECT * FROM STUDENT WHERE id = '${id}';
    `)
  

    return result[0]
}