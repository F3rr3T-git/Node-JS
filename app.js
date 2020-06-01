const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

 const adminRoutes = require('./routes/admin');
 const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById("5ed3e2f34dfe9b312b1ba9bb")
    .then(user => {
        req.user = new User(user.name, user.email, user.cart, user._id) ;
        next();
    })
    .catch(err => {
        console.log(err);
    })
});

 app.use('/Admin', adminRoutes);
 app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
    
    app.listen(9000);
});

