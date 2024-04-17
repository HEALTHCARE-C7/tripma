const router = require('express').Router();
const destination = require ('../controller/destination')


router.get("/",destination.getAll)
router.get("/:Name",destination.getOneName)
router.post("/",destination.added)

module.exports = router;
