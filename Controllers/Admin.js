const Product = require('../Models/Product');


exports.getAddProduct = (req, res, next) => {
    res.render('Admin/Add-Product', {
      pageTitle: 'Add Product',
      path: '/Admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  };
  
  exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('Admin/Products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/Admin/products',
      });
    });
  };

  