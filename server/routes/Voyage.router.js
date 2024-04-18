const router = require('express').Router();
const voyage = require ('../controller/voyage')


router.get("/",voyage.getAll)
router.post("/",voyage.addOne)

router.get('/:companyName',voyage.getOnebycompanyName)
router.get('/destination/:destination',voyage.getOnebydestination)
router.get('/departure/:departure',voyage.getOnebydeparture)
router.get('/departureplace/:departureplace',voyage.getOnebydepartureplace)

// router.get('/getFlight/:flight',voyage.getFlight)
// router.patch('/decrementSeat/:id',voyage.decrementSeat)

router.patch('/decrementSeat/:id',voyage.decrementSeat)
router.get('/getByAll/:departureplace/:destination/:departure',voyage.getByAll)

// router.get('/avilaible',voyage.avilaible)
router.delete('/:id',voyage.deleteVoyage )
router.patch('/:id',voyage.update)

module.exports = router;