const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');



const {posts} = require('../../db')

/* GET home page. */ /* falta agregar el filtrado ordenado*/
router.get('/', async(req, res) =>{
  const allPosts = await posts.findAll();
  res.json(allPosts);
});

/* Find by Id */

router.get('/:id', async(req, res) =>{
  const {id} = req.params;
  try { 
    const byId = await posts.findOne({
    where: {id}
   
    });
   res.json(byId);
    
  } catch (error) {
    res.json(error);
  }
  });


router.post('/', async(req, res) =>{
  const post = await posts.create(req.body);
  res.json(post);
});

/* actualizar un archivo con patch averiguar*/
router.patch('/:id', async(req, res) =>{
  
});

router.delete('/:id', async(req, res) =>{
  const {id} = req.params;
  try { 
    const deleteById = await posts.destroy({
    where: {id}
   
    });
   res.json(deleteById);
    
  } catch (error) {
    res.json(error);
  }
});








module.exports = router;
