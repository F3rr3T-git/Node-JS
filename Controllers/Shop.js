const Product = require('../Models/Product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('Shop/Product-List', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
    });
  });
};

exports.getProduct = (req, res, next) =>{
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect('/');
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('Shop/Index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) =>{
  res.render('Shop/Orders',{
    path: '/orders',
    pageTitle: 'Cart'
  });
};

exports.getOrders = (req, res, next) =>{
  res.render('Shop/Cart',{
    path: '/cart',
    pageTitle: 'Orders'
  });
};

exports.getCheckout = (req, res, next) =>{
  res.render('Shop/Checkout',{
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};