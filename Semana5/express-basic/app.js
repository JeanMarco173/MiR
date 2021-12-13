import express from 'express'
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.status(200).send("<p>Lista de productos</p>")
});

app.get('/add-product', function(req, res) {
    res.status(200).send(`<form action="/product" method="POST">
    <p>Ingrese un producto</p>
    <input type="text" name="title">
    <button type="submit">Add Product</button>
    </form>`)
});

app.post('/product', function(req, res) {
    console.log('body', req.body)
    res.status(200).redirect('/')
});

app.listen(3000, () => { console.log("Back is alive") })