const model = require('../models/Post');

const getQtdPostsUltimosDias =(req, res) => {
    model.getQtdPostsUltimosDias().then(response => {
        res.json(response[0])
    }).catch(e => {
        res.json(e)
    })
}

const getMediaPostPorUsuario =(req, res) => {
    model.getMediaPostPorUsuario().then(response => {
        res.json(response[0])
    }).catch(e => {
        res.json(e)
    })
}

const getPublicacoesByUserId = async (req, res) =>{
    const userId = req.params.userId;
    const userLogadoId = req.params.userLogadoId;
    
    let publicacoes = await model.getPublicacoesById(userId, userLogadoId)

        if(publicacoes.length > 0){
            await Promise.all(publicacoes.map( async (publicacao) => {
                if(publicacao.anexos != "SEM ANEXO"){
                    let novosAnexos = []
                    let anexos = (publicacao.anexos).split('#');
                    if(anexos == []){
                        anexos = [anexos]
                    }
                    if(anexos.length > 0 ){
                        anexos.map(anexo => {
                            let tipoeAnexo = anexo.split(";");
                            let novoAnexo = {
                                anexo: tipoeAnexo[1],
                                tipo: tipoeAnexo[0]
                            }
                            novosAnexos.push(novoAnexo)
                            
                        })
                    }else{
                        let anexo = anexos[0]
                        let tipoeAnexo = anexo.split(";");
                            novosAnexos.tipo.push(tipoeAnexo[0])
                            novosAnexos.anexo.push(tipoeAnexo[1])
                    }
                    publicacao.anexos = novosAnexos;
                }else if(publicacao.compartilhamento != null){
                    let pub_compartilhada = await model.getPublicacaoById(userId, publicacao.compartilhamento)
                        pub_compartilhada = pub_compartilhada[0];
                        

                        
                        if(pub_compartilhada.anexos != "SEM ANEXO"){
                            let novosAnexos = []
                            let anexos = (pub_compartilhada.anexos).split('#');
                            
                            if(anexos.length > 0 ){
                                anexos.map(anexo => {
                                    let tipoeAnexo = anexo.split(";");
                                    let novoAnexo = {
                                        anexo: tipoeAnexo[1],
                                        tipo: tipoeAnexo[0]
                                    }
                                    novosAnexos.push(novoAnexo)
                                    
                                })
                            }else{
                                let anexo = anexos[0]
                                let tipoeAnexo = anexo.split(";");
                                    novosAnexos.tipo.push(tipoeAnexo[0])
                                    novosAnexos.anexo.push(tipoeAnexo[1])
                            }
                            pub_compartilhada.anexos = novosAnexos
                        }
                        
                        publicacao.pub_compartilhada = pub_compartilhada;
        }}))
            
            res.status(200).json(publicacoes)
        }else{
            res.status(200).json({publicacoes: 0})
        }
    
}


const getPublicacoesSeguindo = async (req, res) =>{
    const userId = req.params.userLogadoId;
    
    let publicacoes = await model.getPublicacoesSeguindo(userId)

    if(publicacoes.length > 0){
        await Promise.all(publicacoes.map( async (publicacao) => {
            if(publicacao.anexos != "SEM ANEXO"){
                let novosAnexos = []
                let anexos = (publicacao.anexos).split('#');
                if(anexos == []){
                    anexos = [anexos]
                }
                if(anexos.length > 0 ){
                    anexos.map(anexo => {
                        let tipoeAnexo = anexo.split(";");
                        let novoAnexo = {
                            anexo: tipoeAnexo[1],
                            tipo: tipoeAnexo[0]
                        }
                        novosAnexos.push(novoAnexo)
                        
                    })
                }else{
                    let anexo = anexos[0]
                    let tipoeAnexo = anexo.split(";");
                        novosAnexos.tipo.push(tipoeAnexo[0])
                        novosAnexos.anexo.push(tipoeAnexo[1])
                }
                publicacao.anexos = novosAnexos;
            }else if(publicacao.compartilhamento != null){
                let pub_compartilhada = await model.getPublicacaoById(userId, publicacao.compartilhamento)
                    pub_compartilhada = pub_compartilhada[0];
                    
                    
                    if(pub_compartilhada.anexos != "SEM ANEXO"){
                        let novosAnexos = []
                        let anexos = (pub_compartilhada.anexos).split('#');
                        if(anexos == []){
                            anexos = [anexos]
                        }
                        if(anexos.length > 0 ){
                            anexos.map(anexo => {
                                let tipoeAnexo = anexo.split(";");
                                let novoAnexo = {
                                    anexo: tipoeAnexo[1],
                                    tipo: tipoeAnexo[0]
                                }
                                novosAnexos.push(novoAnexo)
                                
                            })
                        }else{
                            let anexo = anexos[0]
                            let tipoeAnexo = anexo.split(";");
                                novosAnexos.tipo.push(tipoeAnexo[0])
                                novosAnexos.anexo.push(tipoeAnexo[1])
                        }
                        pub_compartilhada.anexos = novosAnexos
                    }
                    publicacao.pub_compartilhada = pub_compartilhada;
    }}))
        
        res.status(200).json(publicacoes)
    }else{
        res.status(200).json({publicacoes: 0})
    }

}



const getPublicacaoById = async (req, res) =>{
    const userId = req.params.userId;
    const postId = req.params.postId;
    
    let publicacoes = await model.getPublicacaoById(userId, postId)

    if(publicacoes.length > 0){
        await Promise.all(publicacoes.map( async (publicacao) => {
            if(publicacao.anexos != "SEM ANEXO"){
                let novosAnexos = []
                let anexos = (publicacao.anexos).split('#');
                if(anexos == []){
                    anexos = [anexos]
                }
                if(anexos.length > 0 ){
                    anexos.map(anexo => {
                        let tipoeAnexo = anexo.split(";");
                        let novoAnexo = {
                            anexo: tipoeAnexo[1],
                            tipo: tipoeAnexo[0]
                        }
                        novosAnexos.push(novoAnexo)
                        
                    })
                }else{
                    let anexo = anexos[0]
                    let tipoeAnexo = anexo.split(";");
                        novosAnexos.tipo.push(tipoeAnexo[0])
                        novosAnexos.anexo.push(tipoeAnexo[1])
                }
                publicacao.anexos = novosAnexos;
            }else if(publicacao.compartilhamento != null){
                let pub_compartilhada = await model.getPublicacaoById(userId, publicacao.compartilhamento)
                    pub_compartilhada = pub_compartilhada[0];
                    
                    
                    if(pub_compartilhada.anexos != "SEM ANEXO"){
                        let novosAnexos = []
                        let anexos = (pub_compartilhada.anexos).split('#');
                        if(anexos == []){
                            anexos = [anexos]
                        }
                        if(anexos.length > 0 ){
                            anexos.map(anexo => {
                                let tipoeAnexo = anexo.split(";");
                                let novoAnexo = {
                                    anexo: tipoeAnexo[1],
                                    tipo: tipoeAnexo[0]
                                }
                                novosAnexos.push(novoAnexo)
                                
                            })
                        }else{
                            let anexo = anexos[0]
                            let tipoeAnexo = anexo.split(";");
                                novosAnexos.tipo.push(tipoeAnexo[0])
                                novosAnexos.anexo.push(tipoeAnexo[1])
                        }
                        pub_compartilhada.anexos = novosAnexos
                    }
                    publicacao.pub_compartilhada = pub_compartilhada;
    }}))
        
        res.status(200).json(publicacoes)
    }else{
        res.status(200).json({publicacoes: 0})
    }

}


const getPublicacoes = async (req, res) =>{
    const userId = req.params.userId;
    
    let publicacoes = await model.getPublicacoes(userId)

    if(publicacoes.length > 0){
        await Promise.all(publicacoes.map( async (publicacao) => {
            if(publicacao.anexos != "SEM ANEXO"){
                let novosAnexos = []
                let anexos = (publicacao.anexos).split('#');
                if(anexos == []){
                    anexos = [anexos]
                }
                if(anexos.length > 0 ){
                    anexos.map(anexo => {
                        let tipoeAnexo = anexo.split(";");
                        let novoAnexo = {
                            anexo: tipoeAnexo[1],
                            tipo: tipoeAnexo[0]
                        }
                        novosAnexos.push(novoAnexo)
                        
                    })
                }else{
                    let anexo = anexos[0]
                    let tipoeAnexo = anexo.split(";");
                        novosAnexos.tipo.push(tipoeAnexo[0])
                        novosAnexos.anexo.push(tipoeAnexo[1])
                }
                publicacao.anexos = novosAnexos;
            }else if(publicacao.compartilhamento != null){
                let pub_compartilhada = await model.getPublicacaoById(userId, publicacao.compartilhamento)
                    pub_compartilhada = pub_compartilhada[0];
                    
                    
                    if(pub_compartilhada.anexos != "SEM ANEXO"){
                        let novosAnexos = []
                        let anexos = (pub_compartilhada.anexos).split('#');
                        if(anexos == []){
                            anexos = [anexos]
                        }
                        if(anexos.length > 0 ){
                            anexos.map(anexo => {
                                let tipoeAnexo = anexo.split(";");
                                let novoAnexo = {
                                    anexo: tipoeAnexo[1],
                                    tipo: tipoeAnexo[0]
                                }
                                novosAnexos.push(novoAnexo)
                                
                            })
                        }else{
                            let anexo = anexos[0]
                            let tipoeAnexo = anexo.split(";");
                                novosAnexos.tipo.push(tipoeAnexo[0])
                                novosAnexos.anexo.push(tipoeAnexo[1])
                        }
                        pub_compartilhada.anexos = novosAnexos
                    }
                    publicacao.pub_compartilhada = pub_compartilhada;
    }}))
        
        res.status(200).json(publicacoes)
    }else{
        res.status(200).json({publicacoes: 0})
    }


}


const storePublicacao = (req, res) => {
    const descricaoPost = req.body.descricao;
    const userId = req.params.userId;

    model.storePublicacao(descricaoPost, userId).then(resposta => {
        res.json(resposta);
    }).catch(e => {
        res.json({
            message: "Erro interno de servidor",
            error: e
        })
    })
}

const sharePublicacao = (req, res) => {
    const descricaoPost = req.body.descricao;
    const userId = req.params.userId;
    const postId = req.params.postId;

    model.sharePublicacao(descricaoPost, userId, postId).then(resposta => {
        res.json(resposta);
    }).catch(e => {
        res.json({
            message: "Erro interno de servidor",
            error: e
        })
    })
}


module.exports = {
    getPublicacoesByUserId,
    getPublicacoesSeguindo,
    storePublicacao,
    getPublicacoes,
    getPublicacaoById,
    sharePublicacao,
    getQtdPostsUltimosDias,
    getMediaPostPorUsuario
}