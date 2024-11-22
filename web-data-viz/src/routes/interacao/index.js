const express = require('express');

const router = express.Router();

const controller = require('../../controllers/interacaoController')


router.post("/like/:userId/:postId", (req, res) => {
    controller.storeLike(req, res);
})

router.post("/comentario/:userId/:postId", (req,res) => {
    controller.storeComentario(req,res );
})

router.get("/comentario/:postId", (req, res) => {
    controller.getComentario(req, res)
})

router.get("/notificacoes/:logadoId/:limit", (req, res) => {
    controller.getNotificacoes(req, res);
})

router.get("/notificacoes/:logadoId", (req, res) => {
    controller.countNotificacoes(req, res);
})

router.put("/setVisto/:interacaoId", (req, res) => {
    controller.setVisto(req, res)
})

module.exports = router;
