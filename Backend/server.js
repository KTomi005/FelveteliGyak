const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql")
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

const db  = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3306,
    password: "",
    database: "felveteli",
});

app.get("/", (req, res) =>{
    res.send("Fut a backend!");
})

db.connect(err =>{
    if(err)
    {
        console.log('Database connection failed:', err)
    }else{
        console.log('Connected to MySQL');
    }
})

app.get("/rangsor", (req, res) =>{
    const [oktazon] = req.params;
    sql = "SELECT diakok.nev FROM diakok INNER JOIN  tagozatok ON tagozatok.agazat"
    db.query(sql, [oktazon], (err, result) =>{
        if (err) return res.status(500).json({error: err.message});
        res.json(result[0]);
    });
})




app.listen(3001, () =>{
    console.log("Server is running on port 3001")
})
