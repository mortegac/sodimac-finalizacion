const express = require('express');
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")
const methodOverride = require("method-override")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const { 
   logGenerate, 
   isChangeLogs,
   error404 
} = require('./index.js');

const app = express();

app.use(cors({credentials: true}));
app.use(helmet());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("tiny"));

//CUSTOM MIDLEWARES
app.use( isChangeLogs );
app.use( logGenerate );



module.exports = { app, error404 }