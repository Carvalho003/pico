const model = require('../models/User');
const  multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/uploads')); // Caminho onde as imagens serão salvas
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname); // Define um nome único para cada arquivo
    }
  });
  const upload = multer({ storage: storage });


const setFoto = (req, res) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Erro ao processar o upload.', err: err });
        }
        if (!req.file) {
          return res.status(400).json({ error: 'Nenhuma imagem recebida!' });
        }

          const foto =  req.file.filename;

          model.setFoto(foto, req.params.userId).then(resposta => {

              res.json({ message: 'Imagem recebida com sucesso!', file: foto });
          }).catch(e => {
            res.json({
                message: "Erro ao atualizar imagem",
                error: e
            })
          })


      });
    
}


const store = async (req, res) =>{
     const { nome, email, dtNasc, password } = req.body;
     

    if (nome && email && dtNasc && password) {
        //validations
        model.store({nome, email, dtNasc, password})
        .then(
            function (resultado) {
                if(resultado.affectedRows > 0){
                    res.json({
                        message: "Usuário cadastrado com sucesso!",
                        success: true
                    })
                }else{
                    res.json(resultado);
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                if(erro.code == "ER_DUP_ENTRY"){
                    res.status(200).json({
                        message: 'O email já esta sendo utilizado'
                    })
                }else{
                    res.status(500).json(erro.sqlMessage)
                }
            }
        );
}else{
    res.status(400).json({
        message: "Campos vazios"
    })
}
}

const authenticate = async(req, res) => {
    const {email, password} = req.body;
    if(email && password){
        model.authenticate(email, password).then((response) => {
            if (response.length > 0) {
                res.json(response[0]);
            } else {
                res.json( {
                    message: 'Email ou Senha incorretos!',  
                })
            }
        }).catch(e => {
            console.log(e)
            res.json({
                message: "Erro ao realizar login",
                error: e
            })
        })

        

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
        model.search(search, limit, logado_id).then(response => {

            if(response.length > 0){
            
                res.json(response)
                 
             }else {
                 res.json( {
                     message: 'Nenhum usuário encontrado'
                 })
             }
        }).catch(e => {
            res.send( {
                message: 'Erro interno no servidor!',
                error: e
            })
        })
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

        model.setUsername(userId, userName).then((response) => {
            if (response.affectedRows > 0) {
                res.json( {
                    message: 'UserName atualizado',
                    userName: userName
                })
            }
            
        }).catch(e => {
            if (e.code == "ER_DUP_ENTRY") {
                res.json( {
                    message: 'Nome de já usuário esta sendo utilizado',
                    error: e
                })
            } else if(e.code == "ER_DATA_TOO_LONG"){
                res.json( {
                    message: 'Nome de usuário muito longo, use até 20 caracteres',
                    error: e
                })
            }
             else {
                res.json( {
                    message: 'Erro interno no servidor',
                    error: e
                })
            }
        })

       
    } else {
        res.status(201).json({
            message: 'Nome de usuário invalido'
        }
        )
    }
}







const getById = async (req,res) => {
    const id = req.params.id;
    
    

    model.getById(id).then(response => {
        if(response.length > 0){
            res.status(200).json(response[0]);
        }else{
            res.status(200).json({
                message: 'Não existe nenhum usuário com esse id'
            });
        }
    }).catch(e => {
        res.json({
            message: 'Erro interno no servidor', 
            error: e
        })
    });
    
    
}



module.exports = {
    store,
    authenticate,
    search,
    setUsername,
    getById,
    setFoto
}