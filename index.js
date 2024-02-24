const express = require("express");
const routesClient = require('./routers/client/index.router');

// mongoose.connect('mongodb://localhost:27017')
//     .then(() => console.log('Connected!'));

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

routesClient(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});