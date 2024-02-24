const express = require("express");
const mongoose = require("mongoose");
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const routesClient = require('./routers/client/index.router');

mongoose.connect('mongodb://localhost:27017/solana')
    .then(() => console.log('Connected!'));

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride('_method'));

// flash
app.use(cookieParser('KJJSLKASASASA'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
// End flash

app.use(express.static("public"));  

routesClient(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});