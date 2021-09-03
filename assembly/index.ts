import { logging } from 'near-sdk-as'
import { usuarios, Usuario, servicios, Servicio, comentarios, Comentario, valoraciones, Valoracion} from "./models";

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
  assert(idCuenta.length>0,"La cuenta es requerida");
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
  assert(idUsuario.length>0,"El idUsuario es requerido");
  let result = new Array<Servicio>();
  for (let i = 0; i < servicios.length; i++){
    if(servicios[i].idUsuario == idUsuario){
      result.push(servicios[i])
    }  
  }
  return result;
}

// Método para consultar un servicio por su id
export function consultarServicio(idServicio: u64): Servicio | null{
  assert(idServicio>=0,"El idServicio es requerido");
  for (let i = 0; i < servicios.length; i++){
    if(servicios[i].idServicio == idServicio){
      return servicios[i];
    }  
  }
  return null;
}

// ------------------------- Métodos del smart contract de COMENTARIOS ------------------------- //

// Método para agregar comentario a un servicio
export function agregarComentario(idServicio: u64, idUsuario: string, comentario: string): void {
  assert(idServicio>=0,"El id de servicio es requerido");
  assert(idUsuario.length>0,"El id de usuario es requerido");
  assert(comentario.length>0,"El comentario es requerido");
  let nuevoComentario = new Comentario(idServicio, idUsuario, comentario);
  comentarios.push(nuevoComentario);
}

// Método para consultar comentarios de un servicio
export function consultarComentarios(idServicio: u64): Array<Comentario>{
  assert(idServicio>=0,"El id de servicio es requerido");
  let result = new Array<Comentario>();
  for (let i = 0; i < comentarios.length; i++){
    if(comentarios[i].idServicio == idServicio){
      result.push(comentarios[i]);
    }  
  }
  return result;
}

// ------------------------- Métodos del smart contract de VALORACIONES ------------------------- //


// Método para agregar valoracion a un servicio
export function agregarValoracion(idServicio: u64, idUsuario: string, valoracion: u64): void {
  assert(idServicio>=0,"El id de servicio es requerido");
  assert(idUsuario.length>0,"El id de usuario es requerido");
  assert(valoracion>=0,"La valoración es requerida");
  let nuevaValoracion = new Valoracion(idServicio, idUsuario, valoracion);
  valoraciones.push(nuevaValoracion);
}

// Método para consultar la valoracion de un servicio
export function consultarValoracion(idServicio: u64): number{
  assert(idServicio>=0,"El id de servicio es requerido");
  let result = 0;
  let contador = 0;
  for (let i = 0; i < valoraciones.length; i++){
    if(valoraciones[i].idServicio == idServicio){
      result += <i32>valoraciones[i].valoracion;
      contador ++;
    }  
  }
  return (result/contador);
}