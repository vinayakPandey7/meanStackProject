const express = require('express'); // import express package installed by npm
const app= express();                // using express by creating express app
const bodyParser = require("body-parser");

const Post = require("./models/post")
//add middleware to listen to req and send responce
// app.use( (req,res,next)=> {
//     console.log("message before next")
//     next();
// })
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vinayakPandey:rit12345@cluster0-wv6vk.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
    console.log("conneted to database")
})
.catch(()=> {
    console.log("conntetion failed")
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//set header
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-COntrol-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
    next();
});

//post API
app.post("/api/addPost", (req,res,next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content

    });
    post.save();
    console.log(post)
    res.status(201).json({
        message: "Post added successfully"
    })
})



// GET API
app.use('/api/posts', (req,res,next) => {
    const post = [
        {   
            id: "asdsadsdc45d",
            title: " first post",
            content: "thisis content"
        },
        {   
            id: "bsdsadsdc45d",
            title: " second post",
            content: "thisis content"
        },
        {   
            id: "csdsadsdc45d",
            title: " third post",
            content: "thisis content"
        }
    ]
    res.status(200).json({
        message: "post fetched succesfully",
        post: post
    })
    console.log('message from express')
}),










module.exports = app