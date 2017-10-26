const mongoose = require("mongoose")

const OptionSchema = mongoose.Schema({
    option: String,
    votes: Number
})

const PollSchema = mongoose.Schema({
    author: String,
    question: String,
    options: [OptionSchema]
}, {timestamps: true})

mongoose.model("Poll", PollSchema)