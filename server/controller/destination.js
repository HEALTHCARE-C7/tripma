const {destination} = require('../database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    getAll:async function(req,res){
        try {
            const destinations = await destination.findMany({})
            res.status(200).send(destinations)
        } catch (error) {
            throw error
        }
    },
    getOneName:async function(req,res){
        try {
            const destinations= await destination.findMany({ where: { Name:req.params.Name} })
            res.status(200).send(destinations)    
        } catch (error) {
            throw error     
        }
    },

}