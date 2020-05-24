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
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price); 
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

  