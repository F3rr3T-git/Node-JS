const Product = require('../Models/Product');

exports.getAddProduct = (req, res, next) =>{

    res.render('Add-Product', {
        pageTitle:'Add Product', 
        path: '/Admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
    };


exports.postAddProduct =  (req, res, next) =>{
    
        const product = new Product(req.body.title);
        product.save();
        res.redirect('/');
     
     }

exports.getProduct = (req, res, next) =>{

    const products = Product.fetchAll();
    res.render('Shop', {
        prods : products, 
        pageTitle : 'Shop', 
        path: '/', 
        hasproducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
 };