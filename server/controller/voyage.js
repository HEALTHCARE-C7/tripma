const {voyage} = require('../database')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    getAll:async function(req,res){
        try {
            const voyages = await voyage.findMany({})
            res.status(200).send(voyages)
        } catch (error) {
            throw error
        }
    },
    addOne : async (req, res) => {
        try {
            const  {companyName,imgUrl,description,price,destination,arrival,departure}=req.body
            const voyages = await voyage.create({data:{companyName,imgUrl,description,price,destination,arrival,departure}})
            res.status(201).send(voyages)
        } catch (error) {
            throw error
        }
    },
    getOnebycompanyName:async function(req,res){
        try {
            const voyages= await voyage.findMany({ where: { companyName:req.params.companyName} })
            res.status(200).send(voyages)    
        } catch (error) {
            throw error    
        } 
    },
    getOnebydestination:async function(req,res){
        try {
            const voyages= await voyage.findMany({ where: { destination:req.params.destination} })
            res.status(200).send(voyages)    
        } catch (error) {
            throw error    
        }
    },
    getOnebydeparture:async function(req,res){
        try {
            const voyages= await voyage.findMany({ where: { id:req.params.id} })
            res.status(200).send(voyages)    
        } catch (error) {
            throw error    
        }
    },
   
    delete:async function(req,res){
        try {
            const voyages = await voyage.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send(voyages)    
        } catch (error) {
            throw error;
        }
    },
    update:async function(req,res){
        try {
            const voyages = await voyage.update({
                where: {
                    id: parseInt(req.params.id )
                },
                data: 
                    req.body
                
            });
                res.status(200).send(voyages)   
        } catch (error) {
          
            throw error;
        }
    }

  

}