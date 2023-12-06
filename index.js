const express = require ('express')
const app = express()
const mysql = require('mysql2')
const PORT = 3000
app.use(express.json())

const newDataBase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '81228122_Bbk',
    database: 'newDataBase'
})
newDataBase.connect()
// module.exports = newDataBase <= Esto va en el fichero anexo de javascript que crearemos luego!


//Ejercicio 1:
app.get('/createdb', (req,res) => {
    const sql = 'CREATE DATABASE newDataBase'
    newDataBase.query(sql,(err,result) => {
        if(err)throw err;
        console.log(result)
        res.send('Database created')
    })
})

app.get('/createTable', (req,res) =>{
    const sql = 'CREATE TABLE products(id int AUTO_INCREMENT, name VARCHAR (50), price VARCHAR (50), PRIMARY KEY(id))'
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Products table created')
    })
})

app.get('/createTable3', (req,res) => {
    const sql = 'CREATE TABLE OtherTable(id int AUTO_INCREMENT, categories VARCHAR(50), patata VARCHAR(50), PRIMARY KEY(id))'
    newDataBase.query(sql, (err,result) => {
        if(err) throw err
        console.log(result)
        res.send('Categories table created')
    })
})

//Ejecicio 2:
app.post("/", (req, res) => {
    const sql = `INSERT INTO products (name, price) values ('${req.body.name}', '${req.body.price}'), ('${req.body.name}', '${req.body.price}')`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.body)
        res.send('Products added')
    })
})

app.post("/categories", (req,res) => {
    const sql = `INSERT INTO categories (categories) values ('${req.body.categories}'), ('${req.body.categories}')`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.body)
        res.send('Categories added')
    })
})

//Ejercicio 3:
app.put("/products/id/:id", (req, res) => {
    const productId = parseInt(req.params.id, 10);
    console.log(req.params.id)
    // const newProduct = 
    const sql = `UPDATE products SET name = "${req.query.name}" WHERE id = ${productId}` 
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.params)
        res.send('Product updated')
    })
})

app.put("/categories/id/:id", (req, res) => {
    // const newCategory = req.body.name
    const categoriesId = parseInt(req.params.id, 10)
    const sql = `UPDATE categories SET categories = '${req.query.categories}' WHERE id = ${categoriesId}`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.params)
        res.send('Categories updated')
    })
})

//Ejercicio 4:
// Endpoint para mostrar todos los productos
app.get('/productsShown', (req, res) => {
    const sql = `SELECT * FROM products`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send({ message: 'Get products', result })
    })
})

// Endpoint para mostrar todas las categorías
app.get('/categoriesShown', (req, res) => {
    const sql =`SELECT * FROM categories`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send({message: 'Get categories', result})
    })
})

// Endpoint para mostrar todos los productos con sus categorías
app.get('/products-categories', (req, res) => {
    const sql = 'SELECT * FROM Products LEFT JOIN Categories ON Products.categoriesId = Categories.id'
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send({message: 'Products and Categories'})
    })
})


// Endpoint para seleccionar un producto por id
app.get('/getProducts/id/:id', (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

// Endpoint para mostrar productos de forma descendente
app.get('/products-desc', (req, res) => {
    const sql = `SELECT * FROM products ORDER BY id DESC`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

// Endpoint para seleccionar una categoría por id
app.get('/getCategories/id/:id', (req, res) => {
    const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

// Endpoint para mostrar categorías de forma descendente
app.get('/categories-desc', (req, res) => {
    const sql = `SELECT * FROM categories ORDER BY id DESC`
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        res.send(result)
    })
})

//Ejercicio 5:
app.delete('/deleteProducts/id/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ${req.params.id} `
    newDataBase.query(sql, (err, result) => {
        if(err) throw err
        console.log(req.params)
        res.send('Product deleted')
    })
})

 