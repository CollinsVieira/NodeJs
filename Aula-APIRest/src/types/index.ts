
export interface persona {
    id        : number,
    username  : string,
    password  : string,
    nombre    : string,
    apellido  : string,
    email     : string,
    celular  : string,
    estado   : string,
    createdAt : string,
    updatedAt : string
}


export interface Asesor extends persona {

}

export interface Student extends persona {
    gradoAcademico : string,
    dni : string,
}

export interface Teacher extends persona {
    
}

export interface Course{
    id : number,
    nombre : string,
    descripcion : string,
    precio : number,
    estado : string,
    createdAt : string,
    updatedAt : string
}

export interface Clase {
    id : number,
    fechaInicio : string,
    fechaFin : string,
    horario : string,
    estado : string,
    createdAt : string,
    updatedAt : string
}