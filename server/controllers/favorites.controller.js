const mongoose = require('mongoose');

const readAll = async (req, res, next) =>{
    try{
        
        res.status(200).json([])

    }catch (error) {
        res.status(400).json({ error: error });
    }
}
const readOne = async (req, res, next) =>{
    try{

       res.status(200).json([])

    }catch (error) {
        res.status(400).json({ error });
    }
}
const create = async (req, res, next) =>{
    try{
        
        res.status(201).json([])

    }catch (error) {
        res.status(400).json({ error });
    }
}
const updateOne = async (req, res, next) =>{
    try{
        res.status(200).json([])

    }catch (error) {
        res.status(400).json({ error });
    }
}
const deleteOne = async (req, res, next) =>{
    try{
        res.status(200).json([])

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