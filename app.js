const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({ layoutsDir: 'Views/Layouts/' ,defaultLayout: 'Main-Layout', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views','Views');

const adminData = require('./Routes/Admin');
const shopRoutes = require('./Routes/Shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'Public')));

app.use('/Admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) =>{

   res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(4700);