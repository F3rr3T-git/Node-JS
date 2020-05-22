const path = require('path');
const express = require('express');
const router = express.Router();

const productController = require('../Controllers/Products');

router.get('/', productController.getProduct);

module.exports = router;