import { context, u128, PersistentVector } from "near-sdk-as";

// Exportando la clase Perfil
@nearBindgen
export class Perfil {
    nombre: string;
    telefono: string;
    correo: string;
    cuenta: string;
    
    constructor(nombre: string,telefono: string, correo: string, cuenta: string){
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.cuenta = cuenta;
    }   
}

/**
 * PersistentVector es una colección persistente de almacenamiento.
 * Todos los cambios que se realicen sobre esta colección serán guardados automáticamente.
 * El parámetro del constructor necesita un valor unico, este será utilizado
 * como prefijo de todas las keys solicitadas en el almacenamiento de los datos en el storage
 */
 export const perfiles = new PersistentVector<Perfil>("p");
