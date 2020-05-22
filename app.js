const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./Controllers/Error');


const app = express();

app.set('view engine', 'ejs');
app.set('views','Views');

const adminRoutes = require('./Routes/Admin');
const shopRoutes = require('./Routes/Shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'Public')));

app.use('/Admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);