const mongoose = require("mongoose");

const {encrypt} = require('../utils')

// const hash = encrypt('hola')
// console.log('--hash-', hash)

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: encrypt
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  favorites: [
    {
      pokemones: { type: mongoose.Schema.Types.ObjectId, ref: "Favorites" },
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt: {
    type: Date,
    default: new Date(),
  },
});


UserSchema.index( 
  {
    username: 'text', 
    email: 'text', 
    // '$**': 'text'
  },{
    weights: {
      username: 5,
      email: 1,
    },
  }
); 


UserSchema.statics.login = async function( username, password){

  return await this.find({"username" : username,"password" : password})
  // console.log(`
  // -username- ${username}
  // -password- ${password}
  // `);
  // const user =  await this.find({"username" : username,"password" : password})
  // console.log('-login-', user);
  // return user
}

const User = mongoose.model("User", UserSchema);


module.exports = User;
