const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const env = require('node-env-file');
env(__dirname + '/.env');

const MAX_EXPIRE = 3 * 24 *60 * 600;   // Expiración en 24 horas
const SECRET_JWT = process.env.TOKEN_SECRET
const API_PORT = process.env.API_PORT

const encrypt = (key) =>{

    // generate a hash from string
    // create hash
    // HMAC en sus siglas en inglés Hash-based message authentication code, 
    // es una construcción de código que calcula un hash para autenticar alguna información
    // En este caso Crypto provee como parámetro un string para personalizar nuestro hash.

    const hash = crypto.createHmac('sha512', `${process.env.SALT_SECRET}`);
    hash.update(key);
    const value = hash.digest('hex','hex','utf8')

    return value
}

const encryptText = (text) =>{
  var cipher = crypto.createCipher('aes-256-ctr', `${process.env.SALT_SECRET}`)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
const decryptText = (text) =>{
  var decipher = crypto.createDecipher('aes-256-ctr', `${process.env.SALT_SECRET}`)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

//TOKEN JWT ACCESO
const createTokenAuth = (data) => {
    // console.log('secret', SECRET_JWT, "expiresIn:", MAX_EXPIRE);
    return jwt.sign(
        { ...data }, 
        SECRET_JWT,
        { expiresIn: MAX_EXPIRE })
}

const verifiedToken = (token)=> jwt.verify( token, SECRET_JWT, (err, decoded) => {      
        if (err) {
          return { status : false, objAuth: 'Invalid Token' };    
        } else {
          return { status : true, objAuth: decoded };    
        }
});



module.exports = { 
    encrypt,
    encryptText,
    decryptText,
    createTokenAuth,
    verifiedToken,
    API_PORT 
}