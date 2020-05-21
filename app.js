const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views','Views');

const adminRoutes = require('./Routes/Admin');
const shopRoutes = require('./Routes/Shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'Public')));

app.use('/Admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) =>{

   res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
});

app.listen(4000);