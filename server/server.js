const express = require("express")
const { API_PORT} = require('./utils')

const { app, error404 } = require('./midlewares/app')
const db = require('./db/connection')

app.use(require('./routes/index'))

app.get('/', (req, res)=>{
    res.send(200,{message: 'Bienvenido a Api que gestiona pokémones favoritos'})
})

app.use( error404 ); 

app.listen(API_PORT, () => { console.log(`Server is running... in port ${API_PORT}`) });

