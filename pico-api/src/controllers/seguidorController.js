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

module.exports = {
    countSeguidoresByUserId,
    countSeguindoByUserId
}