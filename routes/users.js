let express = require('express');
let router = express.Router();
let controller = require('../controllers/users');

router.get('/query', controller.userQuery);
router.post('/queryPage', controller.userQueryPage);
router.post('/queryOne', controller.userQueryOne);
router.post('/login', controller.userLogin);
router.post('/add', controller.userAdd);
router.post('/update', controller.userUpdate);
module.exports = router;
