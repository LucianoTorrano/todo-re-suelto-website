const express = require('express');
const router = express.Router();

router.get('/productos',(req,res)=>{
    res.render('productos/productos');
})

module.exports = router;