export enum RabbitMQ {
  StudentQueue = 'students',
  EquipoQueue = 'students',

}

export enum StudentMsg {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
}

export enum EquipoMsg {
  CREATE = 'CREATE_EQUIPO',
  FIND_ALL = 'FIND_EQUIPOS',
  FIND_ONE = 'FIND_EQUIPO',
  UPDATE = 'UPDATE_EQUIPO',
  DELETE = 'DELETE_EQUIPO',
}
