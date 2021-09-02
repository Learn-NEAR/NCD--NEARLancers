# `NEARLancers`

📄 Description
==================

NEARLancers es un contrato inteligente en el que puede crear un perfil y si lo desea puede ofrecer servicios para los demás usuarios, se podrán almacenar diversos servición y consultar todos los servicios en general o de un usuario en específico utilizando el protocolo NEAR. Las siguientes son las principales funcionalidades de este contrato inteligente:

1. Crear perfil de usuario.
2. Consultar un perfil de usuario.
2. Agregar servicio.
3. Obtener todos los servicios.
4. Obtener todos los servicios de un usuario. 
5. Agregar calificación.
6. Agregar comentarios a algún servicio.
7. Transferir nears al servicio que estás contratando.

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

Cree el código del contrato inteligente de NEARLancers e implemente el servidor de desarrollo local: `yarn buil` (consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional implementado (guárdelo para usarlo más tarde)

📑 Explorando los métodos de contrato inteligente NEARLancers
==================

Los siguientes comandos le permiten interactuar con los métodos del contrato inteligente utilizando NEAR CLI (para esto, debe tener implementado un contrato inteligente provisional).

Comando para crear pefil: 
--------------------------------------------
```bash
near call $CONTRACT nuevoPerfil '{ "nombre":"string", "telefono":"string","correo":"string","cuenta":"string"}' --account-id <your test account>
```

Comando para consultar todos los perfiles:
--------------------------------------------
```bash
near view $CONTRACT consultarPerfiles  
```

Comando para consultar perfil de una cuenta:
--------------------------------------------
```bash
near call $CONTRACT consultarPerfil '{"nombreCuenta":"cuenta.testnet"}' --account-id <your test account>
```
