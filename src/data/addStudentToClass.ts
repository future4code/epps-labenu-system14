import connection from '../connection'
import { relationship } from '../type'

export  async function addStudentToClass(studentToClass: relationship) {
   
    const {id, studentId, classId} = studentToClass

    await connection.raw(`
    INSERT INTO relacional_class VALUES(
        ${id}, ${studentId}, ${classId}
    );
    `)

    
}