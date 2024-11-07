const model = require('../model/Seguidor');

const countSeguidoresByUserId = async (req, res) => {
    const userId = req.params.userId;

    const seguidores = await model.getCountSeguidoresById(userId)

    if(seguidores.length > 0){
        res.status(200).json(seguidores[0])
    }else{
        res.status(200).json({seguidores: 0})
    }
}

const countSeguindoByUserId = async (req, res) => {
    const userId = req.params.userId;

    const seguidores = await model.getCountSeguindoById(userId)

    if(seguidores.length > 0){
        res.status(200).json(seguidores[0])
    }else{
        res.status(200).json({seguidores: 0})
    }
}

const getSeguindoByUserId = async (req, res) => {
    const userId = req.params.userId;
    const {search, limit} = req.body;
    const userLogadoId = req.params.userLogadoId
    
    const seguindo = await model.searchSeguindoByUserId(search, limit, userId, userLogadoId);

    if(seguindo.length > 0){
        res.status(200).json(seguindo)
    }else {
        res.status(200).json({
            message: 'Nenhum usuário encontrado'
        })
    }
}


const getSeguidoresByUserId = async (req, res) => {
    const userId = req.params.userId;
    const userLogadoId = req.params.userLogadoId;
    const {search, limit} = req.body;
    
    const seguindo = await model.searchSeguidoresByUserId(search, limit, userId, userLogadoId);

    if(seguindo.length > 0){
        res.status(200).json(seguindo)
    }else {
        res.status(200).json({
            message: 'Nenhum usuário encontrado'
        })
    }
}

module.exports = {
    countSeguidoresByUserId,
    countSeguindoByUserId,
    getSeguindoByUserId,
    getSeguidoresByUserId
}