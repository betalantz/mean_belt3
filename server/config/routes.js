const path = require("path")

const polls = require("./../controllers/polls_con.js")

module.exports = app => {
    app.post("/login", polls.login)
    app.post('/addPoll', polls.addPoll)
    app.get('/login_stat', polls.login_stat)
    app.get('/logout', polls.logout)
    app.get('/get_all', polls.get_all)
    app.post('/get_one', polls.get_one)
    app.post('/add_vote', polls.add_vote)
    app.post('/delPlayer', polls.delete)
    
    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}