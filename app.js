const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

//variables de entorno
dotenv.config({path:".env"});

const app = express();

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", 'ejs');


app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, ()=> console.log(`listening on http://localhost:${process.env.PORT}`));
