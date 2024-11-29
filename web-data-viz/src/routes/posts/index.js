const express = require('express');

const controller = require('../../controllers/postController')

const router = express.Router();


router.get("/maisInteracoes", (req, res) => {
    controller.getPostsComMaisInteracoes(req, res)
})

router.get('/perfil/:userId/:userLogadoId', (req, res) => {
    controller.getPublicacoesByUserId(req, res)
})

router.post('/share/:postId/:userId', (req, res) => {
    controller.sharePublicacao(req, res)
})

router.get('/graficoQtdPosts', (req, res) => {
    controller.getQtdPostsUltimosDias(req, res);
})

router.get('/graficoMedia', (req, res) => {
    controller.getMediaPostPorUsuario(req, res);
})

router.get('/seguindo/:userLogadoId', (req, res) => {
    console.log(req.params)
    controller.getPublicacoesSeguindo(req, res);
})

router.get('/:userId', (req, res) => {
    console.log(req.params)
    controller.getPublicacoes(req, res);
})

router.post("/:userId", (req, res) => {
    controller.storePublicacao(req, res);
})

router.get("/:userId/:postId", (req,res) => {
    controller.getPublicacaoById(req, res)
})

module.exports = router