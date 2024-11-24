const model = require('../models/Seguidor');

const countSeguidoresByUserId = async (req, res) => {
    const userId = req.params.userId;

    model.getCountSeguidoresById(userId).then(seguidores => {

        res.json(seguidores);
    }).catch(e => {
        res.json({
            message: 'Erro interno no servidor',
            error: e
        })
    })

}

const getUsuariosComMaisSeguidores =(req, res) => {
    model.getUsuariosComMaisSeguidores().then(response => {

        res.json(response);
    }).catch(e => {
        res.json({
            message: 'Erro interno no servidor',
            error: e
        })
    })
}



const setVisto = (req, res) => {
    const userId = req.params.userId;
    const userLogadoId = req.params.userLogadoId;

    model.setVisto(userId, userLogadoId).then(response => {
        res.json(response)
    }).catch(e => {
        res.json(e)
    })
}

const getSugestoes = (req, res) => {
    const userId = req.params.userId;
    
    model.getSugestoes(userId).then(resposta => {
        res.json(resposta)
    }).catch(e => {
        res.json({
            message: "Erro interno de servidor",
            error: e
        })
    })
}



const seguir = async (req,res) => {
    const {seguidor_id} = req.body;
    
    const seguido_id = req.params.seguido_id;
    
        
    model.checkSeguir(seguido_id, seguidor_id).then(response => {
        
            if(response.length > 0){
                if(response[0].status == 1){
                    res.status(500).json({
                        message: 'Impossível seguir novamente'
                    });
                }else{
                    model.updateSeguir(seguido_id, seguidor_id).then(updateRows => {
                        if(updateRows.affectedRows > 0){
                            res.json({
                                message: 'Sucesso ao seguir'
                            })
                        }else{
                            res.json({
                                message: 'Erro no servidor'
                            })
                        }
                        
                    }).catch(e => {
                        res.json({
                            message: 'Erro no servidor',
                            error: e
                        })
                    });
                } 
            }else{
                
                model.insertSeguir(seguido_id, seguidor_id).then(() => {

                res.json({
                    message: 'Sucesso ao seguir'
                })
        
               }).catch(e => {
                    res.json({
                        message: 'Erro no servidor',
                        error: e
                    })
               })
            
            }
       
    }).catch(e => {
        res.json({
            message: 'Erro interno no servidor!',
            error: e
        })
    })
    
    
    
}


const deixarSeguir = async (req,res) => {
    const {seguidor_id} = req.body 
    const seguido_id = req.params.id;

    if(seguido_id && seguidor_id){
        model.deixarSeguir(seguido_id, seguidor_id).then(res => {
            if(res.affectedRows > 0){
                res.json({
                    message: 'Sucesso'
                })
            }else{
                res.json({
                    message: 'Erro ao deixar de seguir'
                })
            }
        }).catch(e => {
            
             res.json({
                message: 'Erro interno no servidor',
                error: e
            })
        })
    }else{
        res.json({
            message: "Ids indefinidos"
        })
    }
    
    
}





const countSeguindoByUserId = async (req, res) => {
    const userId = req.params.userId;

    model.getCountSeguindoById(userId).then(response => {
        if(response.length > 0){
            res.status(200).json(response[0])
        }else{
            res.status(200).json({seguindo: 0})
        }
    }).catch(e => {
        res.json({
            message: 'Erro interno no servidor',
            error: e
        })
    })

    
}

const getSeguindoByUserId = async (req, res) => {
    const userId = req.params.userId;
    const {search, limit} = req.body;
    const userLogadoId = req.params.userLogadoId
    
    model.searchSeguindoByUserId(search, limit, userId, userLogadoId).then(seguindo => {

        if(seguindo.length > 0){
            res.status(200).json(seguindo)
        }else {
            res.status(200).json({
                message: 'Nenhum usuário encontrado'
            })
        }
    }).catch(e => {
        res.json({
            message: 'Erro interno nos servidor',
            error: e
        })
    })

}


const getSeguidoresByUserId = async (req, res) => {
    const userId = req.params.userId;
    const userLogadoId = req.params.userLogadoId;
    const {search, limit} = req.body;
    
    model.searchSeguidoresByUserId(search, limit, userId, userLogadoId).then(seguidores => {

        if(seguidores.length > 0){
            res.status(200).json(seguidores)
        }else {
            res.status(200).json({
                message: 'Nenhum usuário encontrado'
            })
        }
    }).catch(e => {
        res.json({
            message: 'Erro interno nos servidor',
            error: e
        })
    })

}

module.exports = {
    countSeguidoresByUserId,
    countSeguindoByUserId,
    getSeguindoByUserId,
    getSeguidoresByUserId,
    seguir,
    deixarSeguir,
    getSugestoes,
    setVisto,
    getUsuariosComMaisSeguidores
}