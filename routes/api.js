const router = require('express').Router();
const kythuatphancung = require('../kythuatphancung');

router.use('/kythuatphancung',kythuatphancung)

module.exports = router;