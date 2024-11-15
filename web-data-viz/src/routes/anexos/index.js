const express = require('express');

const router = express.Router();


const controller = require('../../controllers/anexoController')


router.post('/:postId', (req, res) => {
    console.log(req.body, "asdnaisnfdakjsnfjkasdnfkjankjdf")
    controller.storeAnexo(req, res)
})


module.exports = router;