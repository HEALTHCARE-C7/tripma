// routes/reviewRoutes.js

const router = require('express').Router();
// const router = express.Router();
const review = require('../controller/review');

// Route to get all reviews
router.get('/',review.getAll)

// Route to get review by ID
router.get('/:id', review.getReviewById)

// Route to create a new review
router.post('/', review.createReview)

// Delete review by ID


module.exports = router;
