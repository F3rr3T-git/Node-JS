const path = require('path');
const express = require('express');

const adminData = require('./Admin');
const router = express.Router();



router.get('/', (req, res, next) =>{
    const products = adminData.products;
    res.render('Shop', {prods : products, pageTitle : 'Shop', path: '/'});
 
 });

module.exports = router;