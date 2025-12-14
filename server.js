
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

mongoose.connect(mongurl).then(()=>{})

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
    
    res.redirect('index.html')

})

// LOGIN
app.post('/login', async(req, res) => {
    const {email, password} = req.body

    const data = await Accounts.findOne({email:email, password:password})

    if(data){
        res.redirect("dashboard.html")
    }
    else{
        return
    }

})


//DASHBOARD PROGRESS
const schema2 = new mongoose.Schema({
    Progress: Number
})

const DashboardProgress = mongoose.model('dashboard_progress', schema2)

app.get('/dashboard-progress', async(req, res) =>{
    const data = await DashboardProgress.find()

    res.json(data)
})

app.post('/dashboard-progress/update', async(req, res)=>{
    const {Progress} = req.body

    const data = await DashboardProgress.updateOne({}, {$set:{Progress:Progress}})
    
    res.json(Progress)
})

//All Scores
const schema3 = new mongoose.Schema({
    Difficulty: String,
    Mode: String,
    Score: Number,
    Items: Number
})

const AllScores = mongoose.model('AllScores', schema3)

app.get('/AllScores', async(req, res) =>{
    const data = await AllScores.find()

    res.json(data)
})

//PRE TEST SCORES

app.post('/AllScores/update/easy/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Easy', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Moderate', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Challenging', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Tough', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

//POST TEST SCORES

app.post('/AllScores/update/easy/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Easy', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Moderate', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Challenging', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Tough', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

//INHERITANCE SCORES

app.post('/AllScores/update/easy/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Easy', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Moderate', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Challenging', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Tough', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

//ENCAPSULATION SCORES

app.post('/AllScores/update/easy/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Easy', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Moderate', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Challenging', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Tough', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

//ABSTRACTION SCORES

app.post('/AllScores/update/easy/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Easy', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Moderate', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Challenging', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Tough', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

//POLYMORPHISM SCORES

app.post('/AllScores/update/easy/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Easy', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Moderate', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Challenging', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({Difficulty:'Tough', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

//MODULES PROGRESS

const schema4 = new mongoose.Schema({
    inheritanceProgress: Number,
    encapsulationProgress: Number,
    abstractionProgress: Number,
    polymorphismProgress: Number
})

const moduleProgress = mongoose.model('moduleProgress', schema4)

app.get('/moduleProgress', async(req, res) => {
    const data = await moduleProgress.find()

    res.json(data)
})

app.post('/moduleProgress/update/inheritance', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({inheritanceProgress:{$exists:true}}, {$set:{inheritanceProgress: Progress}})
    res.json(data)
})

app.post('/moduleProgress/update/encapsulation', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({encapsulationProgress:{$exists:true}}, {$set:{encapsulationProgress: Progress}})
    res.json(data)
})

app.post('/moduleProgress/update/abstraction', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({abstractionProgress:{$exists:true}}, {$set:{abstractionProgress: Progress}})
    res.json(data)
})

app.post('/moduleProgress/update/polymorphism', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({polymorphismProgress:{$exists:true}}, {$set:{polymorphismProgress: Progress}})
    res.json(data)
})

app.listen(5000, () => {
    
})

