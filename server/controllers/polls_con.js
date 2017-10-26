const mongoose = require("mongoose")
const Poll = mongoose.model("Poll")

module.exports = {
    login: (req, res) => {
        req.session.name=req.body.name
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
    logout: (req, res) => {
		req.session.destroy()
        console.log('user logged out');
        res.redirect("/")
	},
    get_all: (req, res) => {
		Product.find()
			.then(products => {
				res.json(products)
			})
			.catch(err => {
				console.log("Product.find error", err)
				res.status(500).json(err)
			})
    },
    
}
