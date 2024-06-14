// Para este caso no tenemos lo del app.get, para esto tenemos que importar express, pero no es necesario tener que importar todo, solo basta con importar un fragmento del módulo, de esta manera en vez de colocar express, colocamos { Router } ya que así nos lo indica la propia documentación de Express
import { Router } from 'express'

const router = Router();

// app.get('/', (req, res)=> res.render('index.ejs'));
router.get('/', (req, res)=> res.render('index.ejs', { title : "First Web with Node" }));

// app.get('/about', (req, res)=> res.render('about.ejs'));
router.get('/about', (req, res)=> res.render('about.ejs', { title : "About Me" }));

// app.get('/contact', (req, res)=> res.render('contact.ejs'));
router.get('/contact', (req, res)=> res.render('contact.ejs', { title : "Contact Page" }));

export default router;