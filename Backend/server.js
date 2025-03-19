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
 
 
app.get('/elozetes-rangsor', async (req, res) => {
    try {
        const query = `
            SELECT
                diakok.nev AS "Tanuló neve",
                tagozatok.agazat AS "Ágazat",
                diakok.hozott + diakok.kpmagy + diakok.kpmat AS "osszpont"
                FROM diakok
                JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak
                JOIN tagozatok ON jelentkezesek.tag = tagozatok.akod
                ORDER BY diakok.nev ASC;  -- Rendezés név szerint növekvő sorrendben
        `;
 
        db.query(query, (err, rows) => {
            if (err) {
                console.error("Hiba a rangsor lekérdezése közben:", err);
                return res.status(500).send("Hiba történt az adatok lekérésekor.");
            }
            res.json(rows);
        });
    } catch (error) {
        console.error("Hiba a rangsor lekérdezése közben:", error);
        res.status(500).send("Hiba történt az adatok lekérésekor.");
    }
});
 
 
app.get('/felvettek-rangsora', async (req, res) => {
    try {
        const query = `
            SELECT
                tagozatok.agazat AS "Ágazat",
                COUNT(jelentkezesek.diak) AS "Jelentkezők száma",
                SUM(diakok.hozott + diakok.kpmagy + diakok.kpmat) AS "osszpontszam"
                FROM jelentkezesek
                JOIN diakok ON jelentkezesek.diak = diakok.oktazon
                JOIN tagozatok ON jelentkezesek.tag = tagozatok.akod
                WHERE tagozatok.agazat IN ('Informatika', 'Elektronika')
                AND tagozatok.nyek = TRUE
                GROUP BY tagozatok.agazat
                ORDER BY osszpontszam DESC;
        `;
 
        db.query(query, (err, rows) => {
            if (err) {
                console.error("Hiba a rangsor lekérdezése közben:", err);
                return res.status(500).send("Hiba történt az adatok lekérésekor.");
            }
            res.json(rows);
        });
    } catch (error) {
        console.error("Hiba a rangsor lekérdezése közben:", error);
        res.status(500).send("Hiba történt az adatok lekérésekor.");
    }
});
 
 
app.get('/agazatok', async (req, res) => {
    try {
        const query = "SELECT DISTINCT agazat AS Ágazat FROM tagozatok";
        db.query(query, (err, rows) => {
            if (err) {
                console.error("Hiba az ágazatok lekérésekor:", err);
                return res.status(500).send("Hiba történt az adatok lekérésekor.");
            }
            res.json(rows);
        });
    } catch (error) {
        console.error("Hiba az ágazatok lekérésekor:", error);
        res.status(500).send("Hiba történt az adatok lekérésekor.");
    }
});
 
app.get('/felvettek/:agazat', async (req, res) => {
    const { agazat } = req.params;
    console.log("Kiválasztott ágazat:", agazat); // Logoljunk, hogy átjön-e az érték
 
    try {
        const query = `
           SELECT DISTINCT diakok.nev, 
            diakok.hozott + diakok.kpmagy + diakok.kpmat AS osszpont, tagozatok.agazat
            FROM diakok
            JOIN jelentkezesek ON diakok.oktazon = jelentkezesek.diak
            JOIN tagozatok ON jelentkezesek.tag = tagozatok.akod
            WHERE tagozatok.agazat = ?
            ORDER BY osszpont DESC
            LIMIT 32;
            `;
 
        db.query(query, [agazat], (err, rows) => {
            if (err) {
                console.error("Hiba a felvettek lekérésekor:", err);
                return res.status(500).send("Hiba történt az adatok lekérésekor.");
            }
            console.log("Lekért felvettek:", rows); // Logoljuk a visszaadott adatokat
            res.json(rows);
        });
    } catch (error) {
        console.error("Hiba a felvettek lekérésekor:", error);
        res.status(500).send("Hiba történt az adatok lekérésekor.");
    }
});
 
 
 
 
app.listen(3001, () =>{
    console.log("Server is running on port 3001")
})