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
    getFlight:async function(req,res){
        try {
            const voyages = await voyage.findMany({where: {seats:seats > 0} })
            res.status(200).send(voyages)
        } catch (error) {
            throw error
        }
    },
    decrementSeat:async function (req,res) {
        try {
            // Find the flight by its ID
            const flight = await voyage.findMany({ where: { id: Number(req.params.id ) } });
    console.log(flight[0]);
            // Check if the flight exists
            if (flight[0].seats===0) {
                throw new Error("no seats");
            }
    
            // Decrement the number of available seats by 1
            const updatedFlight = await voyage.update({
                where: { id: Number(req.params.id )},
                data: { seats: flight[0].seats - 1 }
            });
            res.status(201).send(updatedFlight)
    
            ;
        } catch (error) {
            throw error;
        }
    },
    
  
    addOne : async (req, res) => {
        try {
            const  {companyName,imgUrl,description,price,destination,departureplace,arrival,departure}=req.body
            const voyages = await voyage.create({data:{companyName,imgUrl,description,departureplace,price,destination,arrival,departure}})
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
    getOnebydepartureplace:async function(req,res){
        try {
            const voyages= await voyage.findMany({ where: { departureplace:req.params.departureplace} })
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
            const voyages= await voyage.findMany({ where: { departure:req.params.departure,
            } })
            res.status(200).send(voyages)    
        } catch (error) {
            throw error    
        }
    },
   
   
    deleteVoyage:async function(req,res){
        try {
            const voyages = await voyage.delete({
                where: {
                    id: Number(req.params.id)
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
    },
    avilaible: async function(req, res) {
        let available = false;
        if (req.body.State=== "false") {
            available = true ;
        }
    
        try {
            const voyages = await voyage.findMany({ where: { available: companyName,imgUrl,description,price,destination,departureplace,arrival,departure } });
            res.status(200).send(true);
        } catch (error) {
            throw error;
        }
    }
    

  

}