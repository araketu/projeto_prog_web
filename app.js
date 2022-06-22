const express = require('express');
const session = require('express-session');
const { render } = require('ejs');
const { urlencoded } = require('express');

app = express();
app.use(express.static('public'));
app.use(urlencoded({extended: false}));

const sessionconfig = require('./config/session.json');
const connection = require('./models/db')



app.use(session({
    secret: sessionconfig.secret,
    resave: sessionconfig.resave,
    saveUninitialized: sessionconfig.saveUninitialized
}));

let router = require('./routes/index')
let authRouter = require('./routes/auth')
let profileRouter = require('./routes/profile')

app.use('/', router) // index router {index, login, register pages}
app.use('/auth', authRouter) // auth router
app.use('/profile', profileRouter) // profile router

app.listen(process.env.PORT || 3000);
