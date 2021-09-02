import { logging } from 'near-sdk-as'
import { usuarios, Usuario, servicios, Servicio} from "./models";

// Método de prueba hola mundo
export function holaMundo(): string {
  return 'Hola mundo';
}

// ------------------------- Métodos del smart contract de USUARIOS ------------------------- //

// Método para registrar un nuevo usuario
export function registrarUsuario(idCuenta: string, nombre: string, telefono: string, correo: string, password: string): void{
  assert(idCuenta.length>0,"La cuenta a la que pertenece el usuario es requerida");
  assert(nombre.length>0 ,"El nombre es requerido");
  assert(telefono.length>0,"El teléfono es requerido");
  assert(correo.length>0,"El correo es requerido");
  assert(password.length>0,"La contraseña es requerida");

  let usuario = new Usuario(idCuenta, nombre, telefono, correo, password);
  usuarios.push(usuario);
}

// Método para consultar todos los usuarios
export function consultarUsuarios(): Array<Usuario>{
  let result = new Array<Usuario>(usuarios.length);
  for (let i = 0; i < usuarios.length; i++){
    let usuario = usuarios[i];
    usuario.password = '';
    result[i] = usuario;
  }
  return result;
}

// Método para consultar un usuario por el id de cuenta
export function consultarUsuario(idCuenta: string): Usuario | null {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idUsuario == idCuenta) {
      let usuarioEncontrado = usuarios[i];
      usuarioEncontrado.password = '';
      return usuarioEncontrado;
    }
  }
  return null;
}

// ------------------------- Métodos del smart contract de SERVICIOS ------------------------- //

// Método para registrar un nuevo servicio
export function registrarServicio(nombre: string, descripción: string, costo: u64, idUsuario: string): void{
  assert(nombre.length>0,"El nombre es requerido");
  assert(descripción.length>0,"La descripción es requerida");
  assert(costo>0,"El costo del servicio es requerido");
  assert(idUsuario.length>0,"El idUsuario es requerido");
  let servicio = new Servicio(servicios.length, nombre, descripción, costo, idUsuario);
  servicios.push(servicio);
}

// Método para consultar todos los servicios
export function consultarServicios(): Array<Servicio>{
  let result = new Array<Servicio>(servicios.length);
  for (let i = 0; i < result.length; i++){
    result[i] = servicios[i];
  }
  return result;
}

// Método para consultar todos los servicios de un usuario
export function consultarServiciosUsuario(idUsuario: string): Array<Servicio>{
  let result = new Array<Servicio>();
  for (let i = 0; i < servicios.length; i++){
    if(servicios[i].idUsuario == idUsuario){
      result.push(servicios[i])
    }  
  }
  return result;
}