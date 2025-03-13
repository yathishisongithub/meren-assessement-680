const express = require('express');
const mongoose = require('mongoose');
const newsModel = require('./models/articlesSchema')

const app = express();

const port=3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/viewarticles', async (req, res) => {
    try {
        const getarticles = await newsModel.find({});
        res.json(getarticles);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
app.get('/viewarticles/:id', async (req, res) => {
    try {
        const getarticle = await newsModel.findById(req.params.id);
        if(getarticle){
            res.json(getarticle);
        }else{
            res.status(404).json({message:"Product not found"});
        }   
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
app.delete('/deletearticle/:id', async (req, res) => {
    try {
        const delarticle = await newsModel.findByIdAndDelete(req.params.id);
        if(delarticle){
            res.json(delarticle);
        }else{
            res.status(404).json({message:"Product not found"});
        }   
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});
app.post('/addarticle', async (req, res) => {
    try {
        const addarticle= await newsModel.create(req.body);
        res.status(201).json(addarticle);
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }
});
mongoose.connect("mongodb+srv://yathishannaram7:38B2iBPTV01396Hu@backenddb.c1b1c.mongodb.net/")
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
})