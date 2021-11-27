const {Schema, model} = require('mongoose');

const MemberSchema = Schema({
    pseudo: String,
    id: Number,
    warn: {
        type: Number,
        default: 0,
    },
    kick: {
        type: Number,
        default: 0,
    },
    ban: {
        type: Number,
        default: 0,
    },
    message: {
        type: Number,
        default: 0
    }
})

module.exports = {
    Member: model("Member", MemberSchema)
}