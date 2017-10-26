const path = require("path")

const polls = require("./../controllers/polls_con.js")

module.exports = app => {
    app.post("/login", polls.login)

    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}