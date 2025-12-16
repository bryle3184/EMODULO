
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

let current_user

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

    const data1 = await AllBadges.insertMany([
        {user: name, name: "Concept Explorer", difficulty: "easy", obtained: false, url: "CONCEPT EXPLORER BADGE.webp"},
        {user: name, name: "Junior Inheritor", difficulty: "easy", obtained: false, url: "JUNIOR INHERITOR.png"},
        {user: name, name: "Data Protector", difficulty: "easy", obtained: false, url: "DATA PROTECTOR.webp"},
        {user: name, name: "Essential Thinker", difficulty: "easy", obtained: false, url: "ESSENTIAL THINKER.png"},
        {user: name, name: "Starter Challenger", difficulty: "easy", obtained: false, url: "STARTER CHALLENGER.webp"},
        {user: name, name: "Code Reuser", difficulty: "easy", obtained: false, url: "CODE REUSER.webp"},
        {user: name, name: "Abstract Thinker", difficulty: "easy", obtained: false, url: "ABSTRACT THINKER.webp"},
        {user: name, name: "Polymorph Pinoeer", difficulty: "easy", obtained: false, url: "POLYMORPH PIONEER.webp"},
        {user: name, name: "Rapid Coder", difficulty: "easy", obtained: false, url: "RAPID CODER.webp"},
        {user: name, name: "Code Apprentice", difficulty: "easy", obtained: false, url: "CODE APPRENTICE.webp"},
        {user: name, name: "OOP Explorer", difficulty: "easy", obtained: false, url: "OOP EXPLORER.png"},
        {user: name, name: "Foundation Builder", difficulty: "easy", obtained: false, url: "FOUNDATION BUILDER.png"},
        {user: name, name: "Beginner Explorer", difficulty: "easy", obtained: false, url: "BEGINNER EXPLORER.webp"},

        {user: name, name: "Concept Challenger", obtained: false, difficulty: "moderate", url: "CONCEPT CHALLENGER.webp"},
        {user: name, name: "Resilient Learner", obtained: false, difficulty: "moderate", url: "RESILIENT LEARNER.webp"},
        {user: name, name: "Level-up Learner", obtained: false, difficulty: "moderate", url: "LEVEL-UP LEARNER.webp"},
        {user: name, name: "Bridge Builder", obtained: false, difficulty: "moderate", url: "BRIDGE BUILDER.webp"},
        {user: name, name: "Data Guardian", obtained: false, difficulty: "moderate", url: "DATA GUARDIAN.png"},
        {user: name, name: "Visionary Designer", obtained: false, difficulty: "moderate", url: "VISIONARY DESIGNER.webp"},
        {user: name, name: "Shape Shifter", obtained: false, difficulty: "moderate", url: "SHAPE SHIFTER.png"},
        {user: name, name: "OOP Challenger", obtained: false, difficulty: "moderate", url: "OOP CHALLENGER.webp"},
        {user: name, name: "Code Warrior", obtained: false, difficulty: "moderate", url: "CODE WARRIOR.webp"},
        {user: name, name: "Problem Solver", obtained: false, difficulty: "moderate", url: "PROBLEM SOLVER.webp"},
        {user: name, name: "Guardian of Code", difficulty: "moderate", obtained: false, url: "GUARDIAN OF CODE.png"},

        {user: name, name: "Master Challenger", obtained: false, difficulty: "challenging", url: "MASTER CHALLENGER.webp"},
        {user: name, name: "Persistent Learner", obtained: false, difficulty: "challenging", url: "PERSISTENT LEARNER.webp"},
        {user: name, name: "On The Climb", obtained: false, difficulty: "challenging", url: "ON THE CLIMB.png"},
        {user: name, name: "Syntax Slayer", obtained: false, difficulty: "challenging", url: "SYNTAX SLAYER.webp"},
        {user: name, name: "Logic Breaker", obtained: false, difficulty: "challenging", url: "LOGIC BREAKER.webp"},
        {user: name, name: "Bug Hunter", obtained: false, difficulty: "challenging", url: "BUG HUNTER.webp"},
        {user: name, name: "Code Survivor", obtained: false, difficulty: "challenging", url: "CODE SURVIVOR.png"},
        {user: name, name: "Code Gladiator", obtained: false, difficulty: "challenging", url: "CODE GLADIATOR.webp"},
        {user: name, name: "Persistent Debugger", obtained: false, difficulty: "challenging", url: "PERSISTENT DEBUGGER.webp"},
        {user: name, name: "Idealist Coder", obtained: false, difficulty: "challenging", url: "IDEALIST.webp"},

        {user: name, name: "OOP Master", obtained: false, difficulty: "tough", url: "OOP MASTER.webp"},
        {user: name, name: "Persistent Challenger", obtained: false, difficulty: "tough", url: "PERSISTENT CHALLENGER.png"},
        {user: name, name: "Code Fighter", obtained: false, difficulty: "tough", url: "CODE FIGHTER.webp"},
        {user: name, name: "Advancing", obtained: false, difficulty: "tough", url: "ADVANCING.webp"},
        {user: name, name: "Code Conqueror", obtained: false, difficulty: "tough", url: "CODE CONQUEROR.webp"},
        {user: name, name: "Guardian of Syntax", obtained: false, difficulty: "tough", url: "GUARDIAN OF SYNTAX.webp"},
        {user: name, name: "Logic Seeker", obtained: false, difficulty: "tough", url: "LOGIC SEEKER.png"},
        {user: name, name: "Summit Climber", obtained: false, difficulty: "tough", url: "SUMMIT CLIMBER.webp"},
        {user: name, name: "Grandmaster of Code", obtained: false, difficulty: "tough", url: "GRANDMASTER OF CODE.webp"},
        {user: name, name: "Iron Coder", obtained: false, difficulty: "tough", url: "IRON CODER.webp"},
        {user: name, name: "Unbreakable Spirit", obtained: false, difficulty: "tough", url: "UNBREAKABLE SPIRIT.webp"},
    ])

    const data2 = await AllScores.insertMany([
        {user: name, Difficulty: "Easy", Mode: "Pre-test", Score: 0, Items: 5},
        {user: name, Difficulty: "Easy", Mode: "Encapsulation", Score: 0, Items: 2},
        {user: name, Difficulty: "Easy", Mode: "Inheritance", Score: 0, Items: 2},
        {user: name, Difficulty: "Easy", Mode: "Abstraction", Score: 0, Items: 2},
        {user: name, Difficulty: "Easy", Mode: "Polymorphism", Score: 0, Items: 2},
        {user: name, Difficulty: "Easy", Mode: "Post-test", Score: 0, Items: 8},

        {user: name, Difficulty: "Moderate", Mode: "Pre-test", Score: 0, Items: 5},
        {user: name, Difficulty: "Moderate", Mode: "Encapsulation", Score: 0, Items: 2},
        {user: name, Difficulty: "Moderate", Mode: "Inheritance", Score: 0, Items: 2},
        {user: name, Difficulty: "Moderate", Mode: "Abstraction", Score: 0, Items: 2},
        {user: name, Difficulty: "Moderate", Mode: "Polymorphism", Score: 0, Items: 2},
        {user: name, Difficulty: "Moderate", Mode: "Post-test", Score: 0, Items: 8},

        {user: name, Difficulty: "Challenging", Mode: "Pre-test", Score: 0, Items: 5},
        {user: name, Difficulty: "Challenging", Mode: "Encapsulation", Score: 0, Items: 2},
        {user: name, Difficulty: "Challenging", Mode: "Inheritance", Score: 0, Items: 2},
        {user: name, Difficulty: "Challenging", Mode: "Abstraction", Score: 0, Items: 2},
        {user: name, Difficulty: "Challenging", Mode: "Polymorphism", Score: 0, Items: 2},
        {user: name, Difficulty: "Challenging", Mode: "Post-test", Score: 0, Items: 8},

        {user: name, Difficulty: "Tough", Mode: "Pre-test", Score: 0, Items: 5},
        {user: name, Difficulty: "Tough", Mode: "Encapsulation", Score: 0, Items: 2},
        {user: name, Difficulty: "Tough", Mode: "Inheritance", Score: 0, Items: 2},
        {user: name, Difficulty: "Tough", Mode: "Abstraction", Score: 0, Items: 2},
        {user: name, Difficulty: "Tough", Mode: "Polymorphism", Score: 0, Items: 2},
        {user: name, Difficulty: "Tough", Mode: "Post-test", Score: 0, Items: 8},
    ])

    const data3 = await DashboardProgress.insertOne({Progress: 0, user: name})

    const data4 = await moduleProgress.insertMany([
        {user: name, inheritanceProgress: 0},
        {user: name, encapsulationProgress: 0},
        {user: name, abstractionProgress: 0},
        {user: name, polymorphismProgress: 0}
    ])
    
    res.redirect('index.html')

})

// GET NAME
app.get('/name', async(req, res) => {
    const data = await Accounts.findOne({name: current_user})

    res.json(data)
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

    current_user = data.name

})


//DASHBOARD PROGRESS
const schema2 = new mongoose.Schema({
    Progress: Number,
    user: String
})

const DashboardProgress = mongoose.model('dashboard_progress', schema2)

app.get('/dashboard-progress', async(req, res) =>{
    const data = await DashboardProgress.find({user: current_user})

    res.json(data)
})

app.post('/dashboard-progress/update', async(req, res)=>{
    const {Progress} = req.body

    const data = await DashboardProgress.updateOne({user: current_user}, {$set:{Progress:Progress}})
    
    res.json(Progress)
})

//All Scores
const schema3 = new mongoose.Schema({
    Difficulty: String,
    Mode: String,
    Score: Number,
    Items: Number,
    user: String
})

const AllScores = mongoose.model('AllScores', schema3)

app.get('/AllScores', async(req, res) =>{
    const data = await AllScores.find({user: current_user})

    res.json(data)
})

//PRE TEST SCORES

app.post('/AllScores/update/easy/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Easy', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Moderate', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Challenging', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/pretest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Tough', Mode:'Pre-test'}, {$set:{Score: Score}})
    res.json(Score)
})

//POST TEST SCORES

app.post('/AllScores/update/easy/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Easy', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Moderate', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Challenging', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/posttest', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Tough', Mode:'Post-test'}, {$set:{Score: Score}})
    res.json(Score)
})

//INHERITANCE SCORES

app.post('/AllScores/update/easy/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Easy', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Moderate', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Challenging', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/inheritance', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Tough', Mode:'Inheritance'}, {$set:{Score: Score}})
    res.json(Score)
})

//ENCAPSULATION SCORES

app.post('/AllScores/update/easy/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Easy', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Moderate', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Challenging', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/encapsulation', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Tough', Mode:'Encapsulation'}, {$set:{Score: Score}})
    res.json(Score)
})

//ABSTRACTION SCORES

app.post('/AllScores/update/easy/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Easy', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Moderate', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Challenging', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/abstraction', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Tough', Mode:'Abstraction'}, {$set:{Score: Score}})
    res.json(Score)
})

//POLYMORPHISM SCORES

app.post('/AllScores/update/easy/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Easy', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/moderate/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Moderate', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/challenging/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Challenging', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

app.post('/AllScores/update/tough/polymorphism', async(req, res)=>{
    const {Score} = req.body

    const data = await AllScores.updateOne({user: current_user, Difficulty:'Tough', Mode:'Polymorphism'}, {$set:{Score: Score}})
    res.json(Score)
})

//MODULES PROGRESS

const schema4 = new mongoose.Schema({
    inheritanceProgress: Number,
    encapsulationProgress: Number,
    abstractionProgress: Number,
    polymorphismProgress: Number,
    user: String
})

const moduleProgress = mongoose.model('moduleProgress', schema4)

app.get('/moduleProgress', async(req, res) => {
    const data = await moduleProgress.find({user: current_user})

    res.json(data)
})

app.post('/moduleProgress/update/inheritance', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({user: current_user, inheritanceProgress:{$exists:true}}, {$set:{inheritanceProgress: Progress}})
    res.json(data)
})

app.post('/moduleProgress/update/encapsulation', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({user: current_user, encapsulationProgress:{$exists:true}}, {$set:{encapsulationProgress: Progress}})
    res.json(data)
})

app.post('/moduleProgress/update/abstraction', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({user: current_user, abstractionProgress:{$exists:true}}, {$set:{abstractionProgress: Progress}})
    res.json(data)
})

app.post('/moduleProgress/update/polymorphism', async(req, res)=>{
    const {Progress} = req.body

    const data = await moduleProgress.updateOne({user: current_user, polymorphismProgress:{$exists:true}}, {$set:{polymorphismProgress: Progress}})
    res.json(data)
})

//ALL BADGES
const schema5 = new mongoose.Schema({
    obtained: Boolean,
    name: String,
    difficulty: String,
    url: String,
    user: String
})

const AllBadges = mongoose.model('AllBadges', schema5)

app.get('/badges/easy', async(req, res) => {
    const data = await AllBadges.find({user: current_user, difficulty: "easy", obtained: true})

    res.json(data)
})

app.get('/badges/moderate', async(req, res) => {
    const data = await AllBadges.find({user: current_user, difficulty: "moderate", obtained: true})

    res.json(data)
})

app.get('/badges/challenging', async(req, res) => {
    const data = await AllBadges.find({user: current_user, difficulty: "challenging", obtained: true})

    res.json(data)
})

app.get('/badges/tough', async(req, res) => {
    const data = await AllBadges.find({user: current_user, difficulty: "tough", obtained: true})

    res.json(data)
})

app.post('/badges/update', async(req, res)=>{
    const {name} = req.body

    const data = await AllBadges.updateOne({user: current_user, name: name}, {$set:{obtained: true}})
    res.json(data)
})

app.listen(5000, () => {
    
})

