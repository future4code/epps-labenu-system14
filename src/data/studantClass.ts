import connection from '../connection'

export default async function studantClass(name:string) {
    const result = await connection.raw(`
        SELECT st.name, st.email, startDate, endDate  FROM CLASS cl
        LEFT JOIN relacional_class rlclass ON cl.id = rlclass.classID
        JOIN STUDENT st ON st.id = rlclass.studentId
        WHERE cl.name = "${name}";
    `)
    
    return result[0]
}