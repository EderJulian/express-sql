const newDataBase = require ('..database.js')

const ProductController = {
    create(req,res) {
        const products = { name:req.body.name, price:req.body.price, categories:req.body.categories}
        let sql = 'INSERT INTO products (name, price, categories_id) SET ?'
        newDataBase.query(sql, products, (err, result) => {
            if(err) throw err
            console.log(result);
            res.send('Products added')
        })
    },
    getAll(req, res) {
        const sql = 'SELECT * FROM products'
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send({ message: 'Get Products', result })
         })
    },
    getByName(req, res) {
        const productName = req.params.name
        const sql = `SELECT * FROM products WHERE name LIKE = '%${productName}'`
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send({ message: 'Products gotten'})
         })
    },
    getByDesc(req, res) {
        const sql = 'SELECT * FROM products ORDER BY id DESC'
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            console.log (result)
            res.send('All done')
        })
    },
    getById(req, res) {
        const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    update(req, res) {
        const productId = req.params.id
        const newProduct = {
            name: req.body.name ? req.body.name : name,
            price: req.body.price || price
        }
        const sql = `UPDATE products SET name = '${newProduct.name}' AND price = '${newProduct.price}'  WHERE Id = ${productId.id}`
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send('Product updated')
         })
    },
    getWithCategories(req, res) {
        const sql =`SELECT products.*, categories.name AS category_name FROM products INNER JOIN categories ON products.category_id = categories.id`
        newDataBase.query(sql, (err, result) => {
            if(err) throw 
            console.log(result);
            res.send('Is that okay?')
        })
    },
    delete(req, res) {
        const sql= `DELETE * FROM products WHERE id = ${req.params.id}`
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send('Product deleted')
        })
    },
 }


module.exports = ProductController
