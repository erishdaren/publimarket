const express = require('express');
const router = express.Router();

router.get('/locales', (req, res)=>{
    res.send('locales desde la base de datos');
    });


module.exports = router;
