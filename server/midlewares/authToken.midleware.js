const jwt = require('jsonwebtoken');
const { verifiedToken } = require('../utils');


const verifiedAuth = async (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).send({ message : 'Recurso no autorizado' });

    const dataJwt= verifiedToken(token);
    if(dataJwt.status){
        next() // Continua con el flujo
    }else{
        res.status(401).send({ message : 'Recurso no autorizado' });
    }
    console.log('VALID-TOKEN', verifiedToken(token));
    

};

module.exports = { verifiedAuth };