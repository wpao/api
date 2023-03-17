const { rejects } = require("assert");
const express = require("express");
const tes1 = './datas/tes1.json'
const tes2 = './datas/tes2.json'

const fs = require('fs');

// const { resolve } = require("path");

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

app.get("/tes2", async (req, res, next) => {
    res.send(await test(tes2))
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
