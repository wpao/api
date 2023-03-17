const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => res.send("Hello Tuan"));
app.get('/paozan', (req, res) => {
    res.json({
        name: "paozan",
        hody: "Game, conding, Al-Qur'an"
    })
})

app.listen(port, () => console.log(`Server is listening on port ${port}`));
