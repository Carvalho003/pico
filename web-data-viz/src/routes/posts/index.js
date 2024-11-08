const express = require('express');

const controller = require('../../controllers/postController')

const router = express.Router();


router.get('/:userId', (req, res) => {
    controller.getPublicacoesByUserId(req, res)
})

module.exports = router