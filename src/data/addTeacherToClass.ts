import connection from '../connection'
import { relationship } from '../type'

export  async function addTeacherToClass(teacherClass: relationship) {
   
    const {id, teacherId, classId} = teacherClass
    console.log('id', id)
    console.log('teacher id',teacherId)
    console.log('class id',classId)

    await connection.raw(`
        INSERT INTO Relationshipt_Teacher_class VALUES(
            ${id}, ${teacherId}, ${classId}
        );
    `)
}