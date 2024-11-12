const model = require('../models/Post');

const getPublicacoesByUserId = async (req, res) =>{
    const userId = req.params.userId;
    model.getPublicacoesById(userId).then(publicacoes => {

        if(publicacoes.length > 0){
            publicacoes.map(publicacao => {
                if(publicacao.anexos != "SEM ANEXO"){
                    let novosAnexos = []
                    let anexos = (publicacao.anexos).split('#');
                    
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
                }
            })
    
            res.status(200).json(publicacoes)
        }else{
            res.status(200).json({publicacoes: 0})
        }
    }).catch(e => {
        res.json({
            message: "Erro interno no servidor", 
            error: e
        })
    })

}

module.exports = {
    getPublicacoesByUserId
}