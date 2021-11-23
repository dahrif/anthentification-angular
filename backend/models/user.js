const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const userSchema = new Schema({

    username : String,
    email : String,
    password : String 
})

const hashedPass = await bcrypt.hash(password) ;

module.exports = mongoose.model('user', userSchema, 'users')
