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

// PARTIALS es un concepto usado para así tener navegación en nuestras rutas, es decir para evitar tener que estar modificando la URL, con esto podemos estar teniendo una navegación en todas nuestras rutas

// Para darle estilo a nuestras vistas, tendremos que crear una carpeta en src llamada public y dentro estaremos alojando a nuestros css

// Hasta ahorita ya se ha trabajado con los partials y ya se añadieron dentro de las views para así tener la misma estructura del main.css, sin embargo para ahorrar tiempo se trabajará con BOOTSTRAP

// Una vez finalizado todo el proceso de la página, es decir que ya se haya terminado vamos a desplegarla, para etse caso se utilizará una página llamada HEROKU, la cual se encargará de generar todas las configuraciones necesarias para la producción de nuestra página, a su vez únicamente es funcional con nodejs por lo que no es necesario tener nada de bases de datos ni nada de eso.
// Para esto solo nos registramos, después seleccionamos create-new-app, colocamos un nombre único y creamos la app; posterior a esto nos da una documentación para poder desplegar la aplicación, aquí se tendrá uso de GIT, dicho esto descargamos HEROKU CLI (la consola de HEROKU), para comprobar su instalación podemos escribir en la cmd "heroku --version"; posterior a esto como se indica en la documentación, primero tenemos nuestro commit, después escribimos heroku login y así podremos logearnos; posterior escribimos el heroku git remote y la ruta como en la documentación y posterior lo pusheamos, hasta aquí se tendrá un error, tenemos que escribir heroku --tail, pero nos indica que no tenemos git start, osea que tenemos que dirigirnos a nuestro package.json y abajo de dev, en la sección de scripts ubicada abajo del debug y arriba del keywords escribir "start" : "node src/index.js" y después heroku nos dará un puerto, por lo que aquí se ve el uso de cuando usamos el process.env.PORT || 3000 y listo, con esto ya pudimos desplegar nuestra primera página