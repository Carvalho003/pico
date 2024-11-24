const express = require('express');

const router = express.Router();

const userController = require('../../controllers/userController');

router.post('/', async (req, res) => {
    userController.store(req, res);
});

router.get('/count', (req, res) => {
    userController.countUsers(req, res);
})

router.get('/porcentagem', (req, res) => {
    userController.getPorcentagemSobUltimoMes(req, res);
})

router.get('/hoje', (req, res) => {
    userController.getUsersHoje(req, res);
})

router.get('/mes', (req, res) => {
    userController.getMesComMaisUsuariosCadastrados(req, res);
})

router.put("/:userId/nome", (req, res) => {
    userController.setNome(req, res);
})

router.put("/:userId/email", (req, res) => {
    userController.setEmail(req, res);
})

router.put("/:userId/senha", (req, res) => {
    userController.setSenha(req, res);
})

router.put('/:userId/foto', (req, res) => {
    userController.setFoto(req,res)
})

router.put('/:userId/fotoCapa', (req, res) => {
    userController.setFotoCapa(req,res)
})

router.post('/authenticate', async (req, res) => {
    userController.authenticate(req, res);
})



router.put('/:id/username', async (req, res) => {
   userController.setUsername(req, res);
})


router.post('/:logado_id/search', async(req, res) => {
   userController.search(req, res);
})



router.put('/:id/unfollow', async(req,res) => {
    console.log(req.body);
    userController.deixarSeguir(req,res);
})

router.get('/:id/', async (req, res) => {
    userController.getById(req,res);
} )


module.exports = router;