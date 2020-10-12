const mongoose = require('mongoose');
const { LogModel, LogResumeModel }  = require('../models');


const logGenerate = async (req, res, next) => {
    try{
        const tracking = {
            host: req.headers.host,
            userAgent: req.headers['user-agent'],
            accept: req.headers.accept,
        }

        const log = new LogModel({ tracking: tracking });
        const saveLog = await log.save(); 

    }catch(err){
        console.log(err);

    }

    next();
};


const isChangeLogs = async (req, res, next) => {
    try{

    // Escuchar eventos
    const changeStream = LogModel.watch();  
        // USERS - Change
        changeStream.on('change', async function(change) {
            LogModel.find({}, async (err, data) => {
                if (err) throw err;

                if (data) {
                    let ip = {ip: req.headers.host};
                    const result = await LogResumeModel.findOne(ip);

                    if(result !== null){
                        const { _id, ip, count } = result;
                        const newdata= {
                            ip,
                            count: parseInt(count)+1
                        }
                        const updateCount = await LogResumeModel.update({ ip: req.headers.host }, newdata)
                    }else{
                    console.log('+++++++ NUEVO REGISTRO+++++', result);
                        const logResume = new LogResumeModel({
                            ip: req.headers.host,
                            count: 1
                        })
                        logResume.save();
                    }


                }
            });
        });
    // });

    }catch(err){
        console.log(err);

    }
    

    next();
};

module.exports = {logGenerate, isChangeLogs};