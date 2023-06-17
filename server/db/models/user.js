const db = require('../database')
const sequelize = require('sequelize')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const axios = require('axios');

const SALT_ROUNDS = 5

const User = db.define('user', {
  username: {
    type: sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password:{
    type:sequelize.STRING,
  },
  firstName:{
    type:sequelize.STRING,
    allowNull:false,
    validate:{
      notEmpty: true,
    },
  },
  lastName:{
    type:sequelize.STRING,
    allowNull:false,
    validate:{
      notEmpty: true,
    },
  },
  email:{
    type:sequelize.STRING,
    allowNull:false,
    validate:{
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl:{
    type:sequelize.STRING,
    defaultValue:'https://s-media-cache-ak0.pinimg.com/originals/d4/e2/2d/d4e22dd0c172a148b1c318276a6a9dfa.jpg',
    validate:{
      notEmpty:true,
    }
  }
});
User.prototype.correctPassword = function(candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
}

User.prototype.generateToken = function() {
  return jwt.sign({id: this.id}, process.env.JWT)
}

/**
 * classMethods
 */
User.authenticate = async function({ username, password }){
    const user = await this.findOne({where: { username }})
    if (!user || !(await user.correctPassword(password))) {
      const error = Error('Incorrect username/password');
      error.status = 401;
      throw error;
    }
    return user.generateToken();
};

User.findByToken = async function(token) {
  try {
    const {id} = await jwt.verify(token, process.env.JWT)
    const user = User.findByPk(id)
    if (!user) {
      throw 'nooo'
    }
    return user
  } catch (ex) {
    const error = Error('bad token')
    error.status = 401
    throw error
  }
}

/**
 * hooks
 */
const hashPassword = async(user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
}
module.exports = User
