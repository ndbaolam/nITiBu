const express = require("express");
const mongoose = require("mongoose");
const routesClient = require('./routers/client/index.router');

mongoose.connect('mongodb://localhost:27017/solana')
    .then(() => console.log('Connected!'));

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));  

routesClient(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});