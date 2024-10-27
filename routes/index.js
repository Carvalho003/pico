const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/app/views/login.html'));
})

router.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/views', 'cadastro.html'));
})

router.get('/feed', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/views/', 'feed.html'));
})

router.get('/perfil', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/views/', 'perfil.html'));
})

module.exports = router;