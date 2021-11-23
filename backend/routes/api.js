const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const Admin = require('../models/admin')
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

// function verifyToken(req, res, next){
//     if(!req.headers.authorization){
//         return res.status(401).send('Non autorisé')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if (token === 'null'){
//         return res.status(401).send('Non autorisé')
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload){
//         return res.status(401).send('Non autorisé')
//     }

//     req.userId = payload.subject
//     next()
// }

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
                if (user._password !== userData._password){
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

router.post('/signupadmin', (req, res) =>{
    let adminData = req.body
    let admin = new Admin(adminData)
    admin.save((error, signedupAdmin) =>{
        if(error){
            console.log(error)
        }
        else{
            let payload = { subject: signedupAdmin._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/loginadmin', (req, res) =>{
    let adminData = req.body

    Admin.findOne({email: adminData.email}, (error,admin) => {
        if(error){
            console.log(error)
        }else{
            if (!admin){
                res.status(401).send("Invalid email")
            } else{
                if (admin._password !== adminData._password){
                res.status(401).send("Invalid password")
                }
                else{
                    let payload = { subject: admin._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                }
            }
        }
    })
})

router.get('/products', (req, res) =>{
    let products = [
        {
            "_id": "1",
            "name": "product 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas dui congue, malesuada mi et, cursus dui. Vivamus at purus sit amet sapien eleifend ",
        },
        {
            "_id": "2",
            "name": "product 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas dui congue, malesuada mi et, cursus dui. Vivamus at purus sit amet sapien eleifend ",
        },
        {
            "_id": "3",
            "name": "product 3",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas dui congue, malesuada mi et, cursus dui. Vivamus at purus sit amet sapien eleifend ",
        },
        {
            "_id": "4",
            "name": "product 4",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas dui congue, malesuada mi et, cursus dui. Vivamus at purus sit amet sapien eleifend ",
        }
    ]
    res.json(products)
})

router.get('/admin', (req, res) =>{
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