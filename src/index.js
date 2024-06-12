// const express = require('express');  Ya no es necesario debido al "type" : "module" contenido dentro de package.json

import express from 'express';  // Esto es posible debido al "type" : "module" declarado dentro de package.json
// import ejs from 'ejs';  // Esto es para trabajar con código HTML en lo que sería el JS; de igual manera no es necesario importar ejs de esta forma ya que en el app.set ya lo estamos declarando
import { dirname, join } from 'path'; // Sirve para obtener la funcion dirname del módulo path, de esta manera con dirname se puede obtener el nombre del directorio de una ruta de archivo dada
// join no le toma importancia a la concatenación sin importar si estamos en windows, linux o mac para el tema de las direcciones al usar / ó \
import { fileURLToPath } from 'url';  // Importa la función del módulo y se encarga de convertir una URL archivo en una ruta de archivo del sistema

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));  // import.meta.url contiene la URL del archivo actual; fileURLToPath convierte la ruta a una ruta del sistema, por ejemplo 'file:///path/to/your/file.js)' en una ruta de archivo del sistema (por ejemplo, '/path/to/your/file.js'); dirname toma toda la ruta y extrae el directorio que la contiene, por ejemplo, si la ruta del archivo es /path/to/your/file.js se devolverá /path/to/your
// Finalizando en que este path se almacenará en __dirname el cual tiene '__' al inicio para indicar que fue una variable creada por nosotros

// console.log(join(__dirname, 'views')); //Imprime la ruta actual

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs'); // View Engine sería un motor de vistas, que básicamente es para extender el HTML dentro del JS

// app.get('/', (req, res)=> res.send("Hello World"));
app.get('/', (req, res)=> res.render('index.ejs'));
app.get('/about', (req, res)=> res.render('about.ejs'));
app.get('/contact', (req, res)=> res.render('contact.ejs'));

app.listen(3000);
console.log("Server is listening on port", 3000);