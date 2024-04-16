// controllers/reviewController.js
const {Review} = require ('../database')
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
module.exports = {
// Get all reviews
getAll:async function(req,res){
    try {
        const Reviews = await Review.findMany({})
        res.status(200).send(Reviews)
    } catch (error) {
        throw error
    }
},

// Get review by ID
getReviewById : async function(req,res){
  try {
      const reviews= await Review.findMany({ where: { id:Number(req.params.id)} })
      res.status(200).send(reviews)
  } catch (error) {
      throw error
  }
},


// Create a new review
 createReview : async (req, res) => {
    try {
        const  {firstName,country,date,ratings,comments }=req.body
        const reviews = await Review.create({data:{firstName,country,date,ratings,comments }})
        res.status(201).send(reviews)
    } catch (error) {
        throw error
    }
},
 deleteReview : async (req, res) => {
    const { id } = req.params;
    try {
      const deletedReview = await prisma.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: 'Review deleted successfully', data: deletedReview });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

}
