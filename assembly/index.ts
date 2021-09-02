import { logging } from 'near-sdk-as'
import { perfiles, Perfil} from "./models";

// Método de prueba hola mundo
export function holaMundo(): string {
  return 'Hola mundo';
}

// Método para registrar un nuevo perfíl
export function nuevoPerfil(nombre: string, telefono: string, correo: string, cuenta: string): void{
  assert(nombre.length>0 ,"El nombre es requerido");
  assert(telefono.length>0,"El teléfono es requerido");
  assert(correo.length>0,"El correo es requerido");
  assert(cuenta.length>0,"La cuenta a la que pertenece el perfio es requerida");
  let perfil = new Perfil(nombre, telefono, correo, cuenta);
  logging.log('Creando perfil para la cuenta '+cuenta);
  perfiles.push(perfil);
}

// Método para consultar todos los perfiles
export function consultarPerfiles(): Array<Perfil>{
  let result = new Array<Perfil>(perfiles.length);
  for (let i = 0; i < perfiles.length; i++){
    result[i] = perfiles[i];
  }
  return result;
}

// Obtener un perfil en especifico
export function consultarPerfil(nombreCuenta: string): Perfil | null {
  for (let i = 0; i < perfiles.length; i++) {
    if (perfiles[i].cuenta == nombreCuenta) {
      return perfiles[i];
    }
  }
  return null;
}