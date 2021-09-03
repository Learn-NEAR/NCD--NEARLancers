import { PersistentVector } from "near-sdk-as";

// Exportando la clase Usuario
@nearBindgen
export class Usuario {
    idUsuario: string;
    nombre: string;
    telefono: string;
    correo: string;
    password: string;
    
    constructor(idCuenta: string, nombre: string, telefono: string, correo: string, password: string){
        this.idUsuario = idCuenta;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.password = password;
    }   
}

// Exportando la clase Servicio
@nearBindgen
export class Servicio {
    idServicio: u64;
    nombre: string;
    descripcion: string;
    costo: u64;
    idUsuario: string;

    constructor(idServicio: u64, nombre: string,descripcion: string, costo: u64, idUsuario: string){
        this.idServicio = idServicio;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.costo = costo;
        this.idUsuario = idUsuario;
    }   
}

// Exportando la clase comentario
@nearBindgen
export class Comentario {
    idServicio: u64;
    idUsuario: string;
    comentario: string;
    
    constructor(idServicio:u64, idUsuario: string, comentario: string){
        this.idServicio = idServicio;
        this.idUsuario = idUsuario;
        this.comentario = comentario;
    }
}

// Exportando la clase valoracion
@nearBindgen
export class Valoracion {
    idServicio: u64;
    idUsuario: string;
    valoracion: u64;
    
    constructor(idServicio:u64, idUsuario: string, valoracion: u64){
        this.idServicio = idServicio;
        this.idUsuario = idUsuario;
        this.valoracion = valoracion;
    }
}

 export const usuarios = new PersistentVector<Usuario>("u");
 export const servicios = new PersistentVector<Servicio>("s"); 
 export const comentarios = new PersistentVector<Comentario>("c");
 export const valoraciones = new PersistentVector<Valoracion>("v");