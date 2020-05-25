const Product = require('../Models/Product');


exports.getAddProduct = (req, res, next) => {
    res.render('Admin/Edit-Product', {
      pageTitle: 'Add Product',
      path: '/Admin/add-product',
      editing: false
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


exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if(!product){
      return res.redirect('/');
    }
  res.render('Admin/Edit-Product', {
      pageTitle: 'Edit Product',
      path: '/Admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};


exports.postEditProduct = (req, res, next) => {

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

  