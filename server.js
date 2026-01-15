import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 ************* Configure Express middleware *************
 */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

const name = process.env.NAME; // <-- NEW

app.get('/', (req, res) => {
    res.send(`Hello, ${name}!`); // <-- UPDATED
});

// const PORT = 3000;
const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

app.get('/new-route', (req, res) => {
    res.send('This is a new route!');
});

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Tell Express where to find your templates
app.set('views', path.join(__dirname, 'src/views'));

/**
 ************* Routes *************
 */

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/about.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/products.html'));
});





app.get('/', (req, res) => {
    const title = 'Welcome Home';
    res.render('home', { title });
});

app.get('/about', (req, res) => {
    const title = 'About Me';
    res.render('about', { title });
});

app.get('/products', (req, res) => {
    const title = 'Our Products';
    res.render('products', { title });
});