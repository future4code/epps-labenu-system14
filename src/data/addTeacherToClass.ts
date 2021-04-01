import connection from '../connection'
import { relationship } from '../type'

export  async function addTeacherToClass(teacherClass: relationship) {
   
    const {id, teacherId, classId} = teacherClass
 

    await connection.raw(`
        INSERT INTO Relationshipt_Teacher_class VALUES(
            ${id.toString()}, ${teacherId}, ${classId}
        );
    `)
}