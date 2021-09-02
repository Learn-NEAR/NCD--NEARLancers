# `NEARLancers`

📄 Description
==================

NEARLancers es un contrato inteligente en el que puede crear un usaurio y si lo desea puede ofrecer servicios para los demás usuarios, se podrán almacenar diversos serviciós y consultar todos en general o de un usuario en específico utilizando el protocolo NEAR. Las siguientes son las principales funcionalidades de este contrato inteligente:

1. Crear usuario.
2. Consultar todos los usuarios.
3. Consultar un usuario por su id.
4. Agregar servicio.
5. Obtener todos los servicios.
6. Obtener todos los servicios de un usuario. 
7. Agregar calificación.
8. Agregar comentarios a algún servicio.
9. Transferir NEAR al servicio que estás contratando.

📦 Instalación
================

Para ejecutar este proyecto localmente, debe seguir los siguientes pasos:

Paso 1: Prerequisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 (recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Cree una cuenta de prueba NEAR [https://wallet.testnet.near.org/]
5. Instale NEAR CLI globalmente: [near-cli] es una interfaz de línea de comandos (CLI) para interactuar con NEAR blockchain

    yarn install --global near-cli

Step 2: Configuración de NEAR CLI
-------------------------------

Configure su near-cli para autorizar su cuenta de prueba creada recientemente:

    near login

Paso 3: Cree y realice una implementación de desarrollo de contrato inteligente
--------------------------------

Cree el código del contrato inteligente de NEARLancers e implemente el servidor de desarrollo local: `yarn buil` (consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional implementado (guárdelo para usarlo más tarde). Para desplegar el contrato generado con `yarn buil` en testnet (https://explorer.testnet.near.org/), ejecutar el comando `yarn deploy` el cual nos regresará el id del contrato desplegado.

📑 Explorando los métodos de contrato inteligente NEARLancers
==================

Los siguientes comandos le permiten interactuar con los métodos del contrato inteligente utilizando NEAR CLI (para esto, debe tener implementado un contrato inteligente provisional).

Comando para crear usuario: 
--------------------------------------------
```bash
export function registrarUsuario(idCuenta: string, nombre: string, telefono: string, correo: string): void{

near call $CONTRACT registrarUsuario '{ "idCuenta":"string", "nombre":"string", "telefono":"string", "correo":"string", "password":"string"}' --account-id <your test account>
```

Comando para consultar todos los usuarios:
--------------------------------------------
```bash
near view $CONTRACT consultarUsuarios
```

Comando para consultar un usuario por id:
--------------------------------------------
```bash
near call $CONTRACT consultarUsuario '{"idCuenta":"cuenta.testnet"}' --account-id <your test account>
```

Comando para guardar un servicio:
--------------------------------------------
```bash
near call $CONTRACT registrarServicio '{ "nombre":"string", "descripción":"string", "costo":"u64", "idUsuario":"string"}' --account-id <your test account>
```

Comando para consultar todos los servicios:
--------------------------------------------
```bash
near view $CONTRACT consultarServicios
```

Comando para consultar todos los servicios de un usuario:
--------------------------------------------
```bash
near call $CONTRACT consultarServiciosUsuario '{"idUsuario":"cuenta.testnet"}' --account-id <your test account>
```