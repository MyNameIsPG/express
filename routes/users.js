let express = require('express');
let router = express.Router();
let controller = require('../controllers/users');

router.get('/query', controller.userQuery);
router.post('/login', controller.userLogin);

module.exports = router;
