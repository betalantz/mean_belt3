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
    logout: (req, res) => {
		req.session.destroy()
        console.log('user logged out');
        res.redirect("/")
	},
    get_all: (req, res) => {
		Poll.find()
			.then(polls => {
				res.json(polls)
			})
			.catch(err => {
				console.log("Poll.find error", err)
				res.status(500).json(err)
			})
    },
    get_one: (req, res) => {
        let id = req.body.id
        Poll.findById({_id:id})
            .then(poll => res.json(poll))
            .catch(err => {
                console.log("Error in get_one", err);
                res.status(500).json(err)
            })
    },
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
    add_vote: (req, res) => {
        console.log("req body for vote", req.body);
        let poll_id = req.body.data.poll_id
        let my_id = req.body.data.option_id
        
        Poll.findById({_id:poll_id})
        .then(poll => {
            let option = poll.options.id(my_id)
            option.votes += 1
            poll.save()
                .then(() => {
                    res.json(true)
                })
                .catch(err => {
                    console.log('vote save error', err)
                    res.status(500).json(err)
                    })
             })
            .catch(err => {
                console.log("Error in get_one", err);
                res.status(500).json(err)
            })
    },
    delete: (req, res) => {
        let id = req.body.id
        console.log("id got to controller", id);
        Poll.remove({ _id: id }, function (err) {
            if(err){
                console.log('Delete error in controller', err)
            } else {
                console.log('player deleted at controller')
                res.json(true)
            }
        })     
    },
}
