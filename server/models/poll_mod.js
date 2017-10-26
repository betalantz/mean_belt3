const mongoose = require("mongoose")

const OptionSchema = mongoose.Schema({
    option: String,
    votes: { type: Number, default: 0 }
})

const PollSchema = mongoose.Schema({
    author: String,
    question: String,
    options: [OptionSchema]
}, {timestamps: true})

mongoose.model("Poll", PollSchema)