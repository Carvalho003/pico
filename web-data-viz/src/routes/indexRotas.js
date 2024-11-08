const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});







router.get('/perfil/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/views/', 'perfil.html'));
})

router.get('/configuracoes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/views', 'configuracoes.html'));
})



module.exports = router;