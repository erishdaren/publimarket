const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res)=>{
    res.send('ingresando a la app');
    });

    router.get('/users/signup', (req, res)=>{                                                                                                                                                                                                                                                                                                    
        res.send('formulario de registro');
        });
    

module.exports = router;
                                                                                                                                                                        