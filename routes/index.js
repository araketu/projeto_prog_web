const express = require('express')
const router = express.Router();


const indexController = require('../controllers/index')


router.get('/', indexController.index);



router.get('/login', indexController.login);


router.get('/edit/:id', indexController.edit);
router.post('/update/:id', indexController.update);


router.get('/delete/:id' , indexController.delete);


router.get('/new', indexController.new_get);

router.post('/new', indexController.new_post);

router.get('/post/:id', indexController.post);

module.exports = router