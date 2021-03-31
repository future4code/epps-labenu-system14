import connection from '../connection'
import { addStudents } from '../type'

export  async function addStudentToClass(studentToClass: addStudents) {
   
    const {id, studentId, classId} = studentToClass
    console.log(id)

    await connection.raw(`
    INSERT INTO relacional_class VALUES(
        ${id}, ${studentId}, ${classId}
    );
    `)

    
}