const router = require('express').Router();
const voyage = require ('../controller/voyage')


router.get("/",voyage.getAll)
router.post("/",voyage.addOne)
router.get('/:companyName',voyage.getOnebycompanyName)
router.get('/:destination',voyage.getOnebydestination)
router.get('/:departure',voyage.getOnebydeparture)
router.delete('/:id',voyage.delete )
router.patch('/:id',voyage.update)
 
module.exports = router;