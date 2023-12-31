const express = require('express');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const router = require('./routes/gallery.routes'); 

//variables de entorno
dotenv.config({path:".env"});

const app = express();

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


//*MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(fileUpload());
app.use(express.json());

 app.use(express.static(path.join(__dirname, 'public')));

 //*RUTAS
 app.use("/", router)

app.listen(process.env.PORT, ()=> console.log(`listening on http://localhost:${process.env.PORT}`));
