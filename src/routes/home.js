const express = require('express')
const db = require('../database/db')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'GOD IS GOOD ALL THE TIME'
    })
})
//create database
router.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql, (err, result) => {
        if (err) throw err
        res.send('database created')
    })
})
//create table
router.get('/createposttable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),title VARCHAR(255), PRIMARY KEY (id))'
    db.query(sql,(err,result) => {
        if(err) throw err
        console.log(result)
        res.send('table created')
    })
})
//insert post
router.get('/insertpost',(req,res)=>{
    let post = {title:'HG',body:'he is great'}
    let sql = 'INSERT INTO posts SET ?'
    db.query(sql,post,(err,result)=>{
        if(err) throw err 
        console.log(result)
        res.send('user added')

    })
})
//insert post 2
router.get('/insertpost2',(req,res)=>{
    let post = {title:'HG 2',body:'he is great 2'}
    let sql = 'INSERT INTO posts SET ?'
    db.query(sql,post,(err,result)=>{
        if(err) throw err 
        console.log(result)
        res.send('user added')

    })
})

//select posts
router.get('/getposts',(req,res)=>{
    let sql = 'SELECT * FROM posts'
    db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.json(result)
    })
})

//select single post
router.get('/getpost/:id',(req,res)=>{
    let sql = `SELECT * FROM posts where id = ?`
    db.query(sql,req.params.id,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.json(result)
    })
})

//update post
router.get('/updatepost/:id',(req,res)=>{
    let title = "NEW TItLE COOL"
    let sql = `UPDATE posts SET title = '${title}' where id = ?`
    db.query(sql,req.params.id,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.json(result)
    })
})

//delete post
router.get('/deletepost/:id',(req,res)=>{
    let sql = `DELETE from posts where id = ?`
    db.query(sql,req.params.id,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.json(result)
    })
})

module.exports = router