const { rejects } = require("assert");
const express = require("express");
const tes1 = './datas/tes1.json'
const fs = require('fs');
const { resolve } = require("path");

const app = express();

const port = process.env.PORT || 3000;

const test = (props) => {
    return new Promise((resolve, reject) => {
        fs.readFile(props, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            // mengubah data menjadi objek JavaScript
            const jsonData = JSON.parse(data);
            // console.log(jsonData);
            // res.send(jsonData)
            resolve(jsonData)
        })
    })
}

app.get("/", (req, res, next) => {
    res.send("Hello Tuan")
});

app.get("/tes1", async (req, res, next) => {
    res.send(await test(tes1))
});

app.get('/paozan', (req, res) => {
    res.json({
        name: "paozan",
        hody: "Game, conding, Al-Qur'an"
    })
})

app.get('/tes1', (req, res) => {
    res.json()
})

app.listen(port, () => console.log(`Server is listening on port ${port}`));
