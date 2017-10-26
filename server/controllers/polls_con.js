const mongoose = require("mongoose")
const Poll = mongoose.model("Poll")

module.exports = {
    login: (req, res) => {
        req.session.name=req.body.name
        console.log("New user logged in as", req.session.name);
        res.json(true)
    },
    login_stat: (req, res) => {
		if(req.session.name){
            console.log(req.session.name, 'is logged in');
            res.json(req.session.name)
		} else {
            res.status(401).json(false)
		}
    },
    // logout: (req, res) => {
	// 	req.session.destroy()
    //     console.log('user logged out');
    //     res.redirect("/")
	// },
    // get_all: (req, res) => {
	// 	Product.find()
	// 		.then(products => {
	// 			res.json(products)
	// 		})
	// 		.catch(err => {
	// 			console.log("Product.find error", err)
	// 			res.status(500).json(err)
	// 		})
    // },
    addPoll: (req, res) => {
        let poll = new Poll(req.body)
        console.log(poll)
        poll.author = req.session.name
        poll.options.push({option: req.body.option1})
        poll.options.push({option: req.body.option2})
        poll.options.push({option: req.body.option3})
        poll.options.push({option: req.body.option4})
        console.log('new poll in ctrl, prior to save', poll)
        poll.save()
            .then(() => {
                res.json(true)
            })
            .catch(err => {
                console.log('poll save error', err)
                res.status(500).json(err)
            })
    },
}
