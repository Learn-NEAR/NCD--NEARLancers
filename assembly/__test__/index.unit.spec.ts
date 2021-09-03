import * as contract from "..";
import { Context } from "near-sdk-as";

// ------------------------- USUARIOS ------------------------- //

// Prueba para la función registrarUsuario
describe("Registrar usuario",()=>{
  it("Debería registrar un usuario", () => {
    expect(() => {
      contract.registrarUsuario("testing777.testnet","Juanito Banana","3115550123","testing@gmail.com","12345");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos idCuenta", () => {
    expect(() => {
      contract.registrarUsuario("","Juanito Banana","3115550123","testing@gmail.com","12345");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el nombre", () => {
    expect(() => {
      contract.registrarUsuario("testing777.testnet","","3115550123","testing@gmail.com","12345");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el número de teléfono", () => {
    expect(() => {
      contract.registrarUsuario("testing777.testnet","Juanito Banana","","testing@gmail.com","12345");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el correo", () => {
    expect(() => {
      contract.registrarUsuario("testing777.testnet","Juanito Banana","3115550123","","12345");
    }).toThrow();
  });
  it("Debería fallar si no enviamos contraseña", () => {
    expect(() => {
      contract.registrarUsuario("testing777.testnet","Juanito Banana","3115550123","testing@gmail.com","");
    }).toThrow();
  });
});

// Prueba para la función consultarUsuarios
describe("Consultar todos los usuarios",()=>{
  it("Debería consultar todos los usuarios", () => {
    expect(() => {
      contract.consultarUsuarios();
    }).not.toThrow();
  });
});

// Prueba para la función consultarUsuario
describe("consultar usuario por idCuenta",()=>{
  it("Debería consultar un usuario por su idCuenta", () => {
    expect(() => {
      contract.consultarUsuario("testing777.testnet");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el idCuenta", () => {
    expect(() => {
      contract.consultarUsuario("");
    }).toThrow();
  });
});


// ------------------------- SERVICIOS ------------------------- //

// Prueba para la función registrarServicio
describe("Registrar servicio",()=>{
  it("Debería registrar un servicio", () => {
    expect(() => {
      contract.registrarServicio("Nombre servicio","Descripción de servicio",500,"testing777.testnet");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos nombre", () => {
    expect(() => {
      contract.registrarServicio("","Descripción de servicio",500,"testing777.testnet");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el descripción", () => {
    expect(() => {
      contract.registrarServicio("Nombre servicio","",500,"testing777.testnet");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el costo", () => {
    expect(() => {
      contract.registrarServicio("Nombre servicio","Descripción de servicio",0,"testing777.testnet");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el idUsuario", () => {
    expect(() => {
      contract.registrarServicio("Nombre servicio","Descripción de servicio",500,"");
    }).toThrow();
  });
});

// Prueba para la función consultarServicios
describe("Consultar todos los servicios",()=>{
  it("Debería consultar todos los servicios", () => {
    expect(() => {
      contract.consultarServicios();
    }).not.toThrow();
  });
});

// Prueba para la función consultarServiciosUsuario
describe("Consultar todos los servicios que ofrece un usuario",()=>{
  it("Debería consultar todos los servicios que ofrece un usuario", () => {
    expect(() => {
      contract.consultarServiciosUsuario("testing777.testnet");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el idUsuario", () => {
    expect(() => {
      contract.consultarServiciosUsuario("");
    }).toThrow();
  });
});

// Prueba para la función consultarServicio
describe("Consultar un servicio por su id",()=>{
  it("Debería consultar un servicio por su id", () => {
    expect(() => {
      contract.consultarServicio(1423);
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el idServicio", () => {
    expect(() => {
      contract.consultarServicio(<u64>NaN);
    }).toThrow();
  });
});