const Product = require('../Models/Product');
const Cart = require('../Models/Cart');

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
  Product.findById(prodId, product =>{
    res.render('Shop/Product-Detail',{
      product:product,
      pageTitle: product.title,
      path: '/products'
  });  
});
};

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
    path: '/cart',
    pageTitle: 'Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
      Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) =>{
  res.render('Shop/Cart',{
    path: '/orders',
    pageTitle: 'Orders'
  });
};

exports.getCheckout = (req, res, next) =>{
  res.render('Shop/Checkout',{
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};