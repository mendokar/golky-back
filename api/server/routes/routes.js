const Router = require('express');
const golkyController = require('../controllers/golkycontroller');

const router = Router();

router.get('/sendParam/:text', golkyController.getDataTest);

module.exports = router;