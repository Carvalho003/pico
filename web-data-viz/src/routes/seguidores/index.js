const express = require('express');

const controller = require('../../controllers/seguidorController')

const router = express.Router();


router.get('/count/seguidores/:userId', async (req,res) =>{
    controller.countSeguidoresByUserId(req, res);
})

router.get("/users", (req, res) => {
    controller.getUsuariosComMaisSeguidores(req, res)
})

router.put("/setVisto/:userId/:userLogadoId", (req, res) =>{
    controller.setVisto(req, res);
})

router.get('/count/seguindo/:userId', async (req,res) =>{
    controller.countSeguindoByUserId(req, res);
})
 
router.post('/seguindo/:userId/:userLogadoId', async (req,res) => {
    controller.getSeguindoByUserId(req, res)
})

router.post('/seguidores/:userId/:userLogadoId', async (req,res) => {
    controller.getSeguidoresByUserId(req,res);
})

router.post('/:seguido_id/seguir', (req,res) =>{
    console.log(req.params.seguido_id)
    controller.seguir(req, res);
})

router.put('/:id/unfollow', async(req,res) => {
    console.log(req.body);
    controller.deixarSeguir(req,res);
})

router.get('/sugestoes/:userId', (req, res) => {
    controller.getSugestoes(req, res);
})


module.exports = router;