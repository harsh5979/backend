const mongoose = require('mongoose');

const PracticalSchema = mongoose.Schema({
    set: {
        type: Number,
        required: true,
    },
    que: {
        type: String,
        required: true,
    },
    ans: {
        type: String,
        required: true,
    }


})
module.exports = mongoose.model("Practicals", PracticalSchema);