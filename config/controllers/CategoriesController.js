const newDataBase = require ('../config/database.js')

const CategoriesController = {
    create(req,res) {
        // const categories = {categories:req.body.name, body:req.body.body}
        const sql = `INSERT INTO categories (name) values ('${req.body.categories}')`
        newDataBase.query(sql, categories, (err, result) => {
            if(err) throw err
            console.log(result);
            res.send('Categories added')
        })
    },
    getAll(req, res) {
        const sql = 'SELECT * FROM categories'
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send({ message: 'Get Categories', result })
         })
    },
    getById(req, res) {
        const sql = `SELECT * FROM CATEGORIES WHERE id = ${req.params.id}`
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    update(req, res) {
        const sql = `UPDATE categories SET name = '${req.body.categories}' WHERE Id = ${req.params.id}`
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send('Category updated')
         })
    },
    delete(req, res) {
        const sql= `DELETE * FROM Categories WHERE id = ${req.params.id}`
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send('Category deleted')
        })
    },
 }

module.exports = CategoriesController