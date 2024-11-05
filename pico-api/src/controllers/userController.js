const model = require('../model/User');

const seguidorModel = require('../model/Seguidor');

const postModel = require('../model/Post')

const store = async (req, res) =>{
     const { nome, email, dtNasc, password } = req.body;

    if (nome && email && dtNasc && password) {
        //validations
        const message = await model.store({nome, email, dtNasc, password})
        //envio pro banco
        
        res.status(200).json(message);
        
    } else {
        res.status(400).json({
            message: 'Erro, campos vazios'
        })
    }
}

const authenticate = async(req, res) => {
    const {email, password} = req.body;
    if(email && password){
        const response =  await model.authenticate(email, password);

        res.status(200).json(response)

    }else{
        res.status(200).json({
            message: 'Campos vazios!'
        })
    }
}

const search = async(req,res) =>{
    const {search, limit} = req.body;
    const logado_id = req.params.logado_id;
    
    if(search && limit) {
       const response = await model.search(search, limit, logado_id);
       res.status(200).json(response)
    }else{
        res.status(200).json({
            message: 'Pesquise algum usuário'
        })
    }
}

const setUsername = async(req,res) => {
    let { userName } = req.body;

    

    if (userName) {
        userName = "@" + userName;
        const userId = req.params.id;

        const response = await model.setUsername(userId, userName);

        res.status(200).json(response)
       
    } else {
        res.status(201).json({
            message: 'Nome de usuário invalido'
        }
        )
    }
}


const seguir = async (req,res) => {
    const {seguidor_id} = req.body;
    
    const seguido_id = req.params.id;
    
        
    const response = await seguidorModel.checkSeguir(seguido_id, seguidor_id);
    
    if(!response.message){
        if(response.length > 0){
            if(response[0].status == 1){
                res.status(500).json({
                    message: 'Impossível seguir novamente'
                });
            }else{
                const updateLine = await seguidorModel.updateSeguir(seguido_id, seguidor_id);
                res.status(200).json(updateLine)
            } 
        }else{
            
           const insertLine = await seguidorModel.insertSeguir(seguido_id, seguidor_id);
           res.status(200).json(insertLine);
            
            
        }
    }else{
        res.status(200).json(response);
    }
    
}


const deixarSeguir = async (req,res) => {
    const {seguidor_id} = req.body 
    const seguido_id = req.params.id;

    const response = await seguidorModel.checkSeguir(seguido_id, seguidor_id);
    console.log(response);
    if(!response.message){
        if(response.length > 0){
            if(response[0].status == 1){
                const updateLine = await seguidorModel.deixarSeguir(seguido_id, seguidor_id);
                res.status(200).json(updateLine);
            }else{
                res.status(500).json({
                    message: 'Impossível deixar de seguir novamente'
                });
            } 
        }else{
            
           const insertLine = await seguidorModel.insertSeguir(seguido_id, seguidor_id);
           res.status(200).json(insertLine);
            
            
        }
    }else{
        res.status(200).json(response);
    }

}

const getById = async (req,res) => {
    const id = req.params.id;
    
    

    const user = await model.getById(id);
    
    if(user.length > 0){
        // const seguidores = await seguidorModel.getCountSeguidoresById(id)

        // if(seguidores.length > 0){
        //     userInfo.seguidores = seguidores[0]
        // }else{
        //     userInfo.seguidores = {seguidores: 0}
        // }

        // const seguindo = await seguidorModel.getCountSeguindoById(id);

        // if(seguindo.length > 0){
        //     userInfo.seguindo = seguindo[0]
        // }else{
        //     userInfo.seguindo = {seguindo: 0}
        // }

       

        res.status(200).json(user[0]);

    }else{
        res.status(200).json({
            message: 'Não existe nenhum usuário com esse id'
        });
    }
}



module.exports = {
    store,
    authenticate,
    search,
    setUsername,
    seguir,
    deixarSeguir, 
    getById
}