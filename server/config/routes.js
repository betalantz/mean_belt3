const path = require("path")

const polls = require("./../controllers/products.js")

module.exports = app => {
    app.post("/login", products.login)
    
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}