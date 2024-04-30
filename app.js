const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/imagens.html")
})

app.listen({
    host: "localhost",
    port: 8082,
    exclusive: true
},
    function () {
        console.log("localhost:8082")
    }
)