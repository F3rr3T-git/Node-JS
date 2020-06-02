const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
//const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

 const adminRoutes = require('./routes/admin');
 const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById("5ed6372c778a87201405e1cf")
    .then(user => {
        req.user = user;
        next();
    })
    .catch(err => {
        console.log(err);
    })
});

 app.use('/Admin', adminRoutes);
 app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://root:*123Sannuappu@cluster0-flpfz.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
   
    User.findOne('5ed6372c778a87201405e1cf')
    .then(user => {
        if(!user){
            const user = new User({
                name: 'Max',
                email: 'max@test.com',
                cart: {
                    items: []
                }
            });
            user.save();
        }
    });
    
    app.listen(9000);
})
.catch(err => {
    console.log(err);
});




