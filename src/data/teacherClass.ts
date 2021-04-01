import connection from '../connection'

export default async function teacherClass(name:string){
    const result = await connection.raw(`
        SELECT cl.name,module, endDate, tc.name, tc.email FROM CLASS cl
        LEFT JOIN Relationshipt_Teacher_class rtc ON cl.id = rtc.classID
        JOIN TEACHER tc ON tc.id = rtc.teacherId
        WHERE cl.name = "${name}";

    `)
    return result[0]
}