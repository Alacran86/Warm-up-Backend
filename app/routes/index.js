const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');



const {posts} = require('../../db')

/* GET home page. */
router.get('/', async(req, res) =>{
  const posts = await posts.findAll();
  res.json(posts);
});

module.exports = router;
