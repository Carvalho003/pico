const express = require('express');
const poolBanco = require('../../connection');
const router = express.Router();

router.post('/api/users', async (req, res) => {
    const {nome, email, dtNasc, password} = req.body;

    if(nome && email && dtNasc && password){
        //validations

        //envio pro banco
        try{
        const result = await poolBanco.execute('INSERT INTO user (nome, email, dtNasc, password) VALUES (?,?,?,?)', [nome, email,dtNasc, password]);

       
            res.status(201).json({
                message: 'Usuário criado com sucesso!'
            });
        }catch(e){
            res.status(400).json({
                message: 'Erro ao criar usuário',
                erro: e
            });
        } 
    }else{
        res.status(400).json({
            message: 'Erro, campos vazios'
        })
    }
    
});

router.get('/api/users', async (req, res) => {
    
    try{
        const [rows] = await poolBanco.query('SELECT * FROM user');
        const resultado = rows;

        res.send(resultado);


    }catch(e){
        console.error(e)
    }
});


module.exports = router;