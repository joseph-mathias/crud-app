const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: "",
    database: "dragon"
});

app.use(cors());
app.use(express.json());
app.use(bodyPaser.urlencoded({extended: true}));
app.post("/api/insert", (req, res)=>{
    const movieName = req.body.movieName;
    const movieDiscription = req.body.discription;

    const sqlInsert = "INSERT INTO movies (movie_name, movie_reviews) VALUES (?, ?)";
    db.query(sqlInsert, [movieName, movieDiscription], (err, result)=>{
        console.log(err);
    });
});

app.listen(3001, ()=>{
    console.log("Listening on port 3001!");
});