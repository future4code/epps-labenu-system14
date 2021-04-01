export type createUser = {
    id: string,
    name: string,
    email: string,
    birthDate: string
}


export enum PERIOD{
    INTEGRAL = "INTEGRAL",
    NIGTHLY = 'NIGTHLY'
}

export type createClass = {
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    module: number | undefined,
    period: PERIOD
}

export type addStudents = {
    id: number,
    studentId: string,
    classId: string
}
