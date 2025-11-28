
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const multer = require('multer')

const app = express()

app.use(express.static('./src'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

dotenv.config()

const mongurl = process.env.MONGO_URL

mongoose.connect(mongurl).then(()=>{console.log('Database Connected!')})

const schema1 = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const Accounts = mongoose.model('accounts', schema1)

// SIGN IN
app.post('/signin', async(req, res)=>{
    const {name, email, createPassword, confirmPassword} = req.body
    
    const data = await Accounts.insertOne({name: name, email: email, password: createPassword})
    console.log(data)
    res.redirect('index.html')

})

// LOGIN
app.post('/login', async(req, res) => {
    const {email, password} = req.body

    const data = await Accounts.findOne({email:email, password:password})

    console.log(data)

    if(data){
        res.redirect("dashboard.html")
    }
    else{
        return
    }

})

app.listen(5000, () => {
    console.log('Server Ready! port:5000')
})

