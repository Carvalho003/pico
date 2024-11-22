const model = require('../models/Interacao');

const storeLike = (req, res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;

    if(userId, postId){
        model.countLikeInPostByIds(userId, postId).then(resposta => {
            if(resposta.length > 0){
                model.deleteLike(userId, postId).then(like => {
                    res.json({
                        message: "Deslike",
                        linhasAfetadas: like.affectedRows
                    })
                })
                
            }else{
                model.storeLike(userId, postId).then(like => {
                    res.json({
                        message: "Like",
                        linhasAfetadas: like.affectedRows
                    })
                })
            }
        })
    }else{
        res.json({
            message: "Os ids estão indefinidos"
        })
    }
}

const getNotificacoes = (req, res) => {
    const logadoId = req.params.logadoId;
    const limit = req.params.limit;

    model.getNotificacoes(logadoId, limit).then(response => {
        res.json(response)
    }).catch(e  => {
        res.json(e)
    })
}

const countNotificacoes = (req, res) => {
    const logadoId = req.params.logadoId;

    model.countNotificacoes(logadoId).then(response => {
        res.json(response[0])
    }).catch(e => {
        res.json(e)
    })
}

const storeComentario = (req,res) => {
    const userId = req.params.userId;
    const postId = req.params.postId;
    const descricao = req.body.descricao;
    model.storeComentario(userId, postId, descricao).then(resposta => {
        console.log(resposta)
        res.json(resposta);
    }).catch(e => {
        res.json({
            message: "Erro interno no servidor",
            error: e
        })
    })
} 

const getComentario = (req, res) => {
    const postId = req.params.postId;

    model.getComentario(postId).then(resposta => {
        res.json(resposta);
    }).catch(e => {
        res.json({
            message: "Erro interno no servidor",
            error: e
        })
    })

    
}

const setVisto = (req, res) => {
    const interacaoId = req.params.interacaoId;

    model.setVisto(interacaoId).then(response => {
        res.json(response)
    }).catch(e => {
        res.json(e)
    })
}




module.exports = {
    storeLike,
    storeComentario,
    getComentario,
    getNotificacoes,
    countNotificacoes,
    setVisto
}