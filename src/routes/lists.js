const express = require('express');
const router = express.Router();

router.get('/condimentos',(req,res)=>{
    res.render('listas/condimentos');
})

router.get('/harinas-y-legumbres',(req,res)=>{
    res.render('listas/harinas');
})

router.get('/reposteria',(req,res)=>{
    res.render('listas/reposteria');
})

router.get('/frutos-secos',(req,res)=>{
    res.render('listas/frutos-secos');
})

router.get('/celiacos-y-veganos',(req,res)=>{
    res.render('listas/celiacos');
})

router.get('/desayunos',(req,res)=>{
    res.render('listas/desayunos');
})

router.get('/hierbas-medicinales',(req,res)=>{
    res.render('listas/hierbas');
})

router.get('/semillas',(req,res)=>{
    res.render('listas/semillas');
})

router.get('/productos-dieteticos',(req,res)=>{
    res.render('listas/dieteticos');
})

router.get('/gourmet',(req,res)=>{
    res.render('listas/gourmet');
})

module.exports = router;