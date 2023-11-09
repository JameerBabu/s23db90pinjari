const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
    Company: String,
    Model: String,
    cost: Number
})
module.exports = mongoose.model("Van",vanSchema)