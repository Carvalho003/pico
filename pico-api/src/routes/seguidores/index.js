const express = require('express');

const controller = require('../../controllers/seguidorController')

const router = express.Router();


router.get('/count/seguidores/:userId', async (req,res) =>{
    controller.countSeguidoresByUserId(req, res);
})

router.get('/count/seguindo/:userId', async (req,res) =>{
    controller.countSeguindoByUserId(req, res);
})
 

module.exports = router;