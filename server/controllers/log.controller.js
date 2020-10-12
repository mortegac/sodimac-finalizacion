const mongoose = require('mongoose');
const { LogModel } = require('../models');
const ObjectId = mongoose.Types.ObjectId;

const create = async (req, res, next) =>{
    try{
        const log = new LogModel(req.body.header);
        const saveUser = await user.save(); 
        
        res.status(201).json(saveUser)

    }catch (error) {
        res.status(400).json({ error });
    }
}

module.exports = {
    readAll,
    readOne,
    create,
    updateOne,
    deleteOne
}