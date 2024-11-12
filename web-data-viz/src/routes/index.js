var express = require("express");

const path = require('path')

var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get('/test-inputmask', (req, res) => {
    res.sendFile(path.join(__dirname, '../../node_modules', 'inputmask', 'dist', 'inputmask.min.js'));
  });

  router.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/app/views/login.html'));
})

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/app/views', 'cadastro.html'));
})

router.get('/feed', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/app/views/', 'feed.html'));
})

router.get('/configuracoes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/app/views', 'configuracoes.html'));
})

router.get('/perfil/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/app/views/', 'perfil.html'));
})

module.exports = router;