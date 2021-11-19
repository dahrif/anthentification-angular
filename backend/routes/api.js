const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')

const db = 'mongodb+srv://dahri:dahri2021@cluster0.unjrx.mongodb.net/mydb?retryWrites=true&w=majority'

mongoose.connect(db, err =>{
    if(err){
        console.error('Error!' + err)
    }
    else{
        console.log('DB connected')
    }
    
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Non autorisé')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Non autorisé')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Non autorisé')
    }

    req.userId = payload.subject
    next()
}

router.get('/', (req, res) =>{
    res.send('From API route')
})

router.post('/signup', (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, signedupUser) =>{
        if(error){
            console.log(error)
        }
        else{
            let payload = { subject: signedupUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) =>{
    let userData = req.body

    User.findOne({email: userData.email}, (error,user) => {
        if(error){
            console.log(error)
        }else{
            if (!user){
                res.status(401).send("Invalid email")
            } else{
                if (user.password !== userData.password){
                res.status(401).send("Invalid password")
                }
                else{
                    let payload = { subject: user._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                }
            }
        }
    })
})

router.get('/home', (req, res) =>{
    let home = [
        {
            "_id": "1",
            "email": "timadd@gmail.com",
            "password": "12356",
        },
        {
            "_id": "2",
            "email": "timadd@gmail.com",
            "password": "12356",
        },
        {
            "_id": "3",
            "email": "timadd@gmail.com",
            "password": "12356",
        },
        {
            "_id": "4",
            "email": "timadd@gmail.com",
            "password": "12356",
        }
    ]
    res.json(home)
})

router.get('/admin', verifyToken, (req, res) =>{
    let admin = [
        {
            "_id": "1",
            "email": "timadd@gmail.com",
            "password": "12356",
        },
        {
            "_id": "2",
            "email": "timadd@gmail.com",
            "password": "12356",
        },
        {
            "_id": "3",
            "email": "timadd@gmail.com",
            "password": "12356",
        },
        {
            "_id": "4",
            "email": "timadd@gmail.com",
            "password": "12356",
        }
    ]
    res.json(admin)
})

module.exports = router