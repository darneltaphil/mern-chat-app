const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Users
const UserSchema = new Schema({
    
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },   
    blocked:[ {type:Schema.Types.ObjectId,}],
});

module.exports = User = mongoose.model('users', UserSchema);
