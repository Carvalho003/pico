const express = require('express');

const controller = require('../../controllers/postController')

const router = express.Router();


router.get('/perfil/:userId/:userLogadoId', (req, res) => {
    controller.getPublicacoesByUserId(req, res)
})

router.get('/seguindo/:userLogadoId', (req, res) => {
    console.log(req.params)
    controller.getPublicacoesSeguindo(req, res);
})

router.post("/:userId", (req, res) => {
    controller.storePublicacao(req, res);
})

module.exports = router