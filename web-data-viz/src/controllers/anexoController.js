const model = require('../models/Anexo')


const  multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/uploads/anexos')); // Caminho onde as imagens serão salvas
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname); // Define um nome único para cada arquivo
    }
  });
  const upload = multer({ storage: storage });


const storeAnexo = async(req,res) =>{
    const postId = req.params.postId
    upload.array('images[]')(req, res, async  (err) => {
        if (err) {
          return res.status(500).json({ error: 'Erro ao processar o upload.', err: err });
        }
        if (!req.files) {
          return res.status(400).json({ error: 'Nenhuma imagem recebida!' });
        }

        console.log(req.files)
        const foto =  req.files[0].filename;

        await Promise.all((req.files).map( async (file) => {

            const response = await model.storeAnexo(file.filename, postId)
    
                console.log(response, "adsadsndjakndsjkdn")
            
        }))
        res.json({
            message: "anexos ok"
        })

    })

}


module.exports = {
    storeAnexo
}