import { context, PersistentVector, math } from "near-sdk-as";

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
    descripción: string;
    costo: u64;
    idUsuario: string;

    constructor(idServicio: u64, nombre: string,descripción: string, costo: u64, idUsuario: string){
        this.idServicio = idServicio;
        this.nombre = nombre;
        this.descripción = descripción;
        this.costo = costo;
        this.idUsuario = idUsuario;
    }   
}

 export const usuarios = new PersistentVector<Usuario>("u");
 export const servicios = new PersistentVector<Servicio>("s");