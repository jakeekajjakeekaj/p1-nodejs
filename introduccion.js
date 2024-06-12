// Para la creación de la aplicación, primero se abre la consola y se escribe npm init -y

// Después escribiremos npm i express que básicamente es para instalar express

// Desoués se instalará el npm i morgan, esto sirve para visualizar en consola las peticiones que irán llegando

// Después se instalará el npm i ejs sirve para generar páginas html, pero de forma extendida para aceptar condicionales, bucles o ese tipo de cosas sin necesidad de llamar JS

// Después instalar npm i nodemon -D, de esta manera con el -D estamos indicando que es para el entorno d edesarrollo y no se tomará en cuenta para la producción, nodemon sirve para estar actualizando cada que se realice un cambio, de esta manera nosotros escribimos en consola una vez ya instalado 'npx nodemon src/index.js' y ya con esto mantendremos ejecutado nodemon; npx es necesario para ejecutar módulos locales

// tomando en cuenta que el comando npx nodemon src/index.js es algo largo, nosotros podemos modificar su llamado entrando a package.json, después en los scripts escribir:
/* 
"scripts": {
  "dev": "nodemon src/index.js"
}
*/
// Una vez finalizado esto, solo basta escribir npm run dev y listo

// --------------

// Para comenzar con el desarrollo en lo que respecta a express, nosotros podemos escribir:
// const express = require('express');
// Pero ahora ya se puede hacer de otra forma, para mantener un estándar respecto al parecido con el lado front-end y mantener actualizado el código, ahora podemos dirigirnos a package.json y dentro, abajo de main pero arriba de Debug escribir:
// "type" : "module",
// De esta manera ahora dentro de index.js podemos escribir:
// import express from 'express'
// quitando así el require