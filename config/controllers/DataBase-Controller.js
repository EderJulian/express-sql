const newDataBase = require('../config/database.js')
const DataBaseController = {
    createnewDataBase(req, res) {
        const sql = 'CREATE DATABASE expressPatataDB'
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            console.log(result);
            res.send('DataBase Created')
        })
    },
    tableCategories(req, res) {
        const sql = 'CREATE TABLE categories(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) NOT NULL)'
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send({ message: 'Categories Table created....', result })
        })
    },
    tableProducts(req, res) {
        sql = 'CREATE TABLE products(id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) NOT NULL, price VARCHAR(50) NOT NULL, category_id INT, FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE ON UPDATE CASCADE)'
        newDataBase.query(sql, (err, result) => {
            if(err) throw err
            res.send({ message: 'Product Table created....', result })
        })
    }
}

module.exports = DataBaseController