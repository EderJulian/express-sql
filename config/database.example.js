const mysql = require('mysql2')
const newDataBase = mysql.createConnection({
    host: '',
    user: '',
    password: "",
    database: "anotherDatabase"
})

newDataBase.connect()

app.get('/createAnotherDataBase', (req, res) => {
    const sql = 'CREATE DATABASE Patata'
    newDataBase.query(sql, (err, result) => {
        if(err) throw err 
        console.log(result)
        res.send('Database created')
    })
})