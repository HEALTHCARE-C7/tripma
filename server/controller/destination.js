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
    added : async (req, res) => {
        try {
            const  {Name,imgUrl,description}=req.body
            const voyages = await destination.create({data:{Name,imgUrl,description}})
            res.status(201).send(voyages)
        } catch (error) {
            throw error
        }
    },

}