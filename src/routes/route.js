const express = require('express');
const router = express.Router();
const cowincontroller= require("../controllers/cowincontroller")
//const auth = require("../middelwares/auth")


router.get("/get/sessiondistrict",cowincontroller.getsession)

router.get("/get/sortedweather",cowincontroller.sortedweather)

// router.get("cowin/sessiondistrict",cowincontroller.getsession)
router.get("/getallmems", cowincontroller.getAllMems);
router.post("/pickmemid",cowincontroller.pickMemId);

router.post("/creatememes", cowincontroller.createMemes)



module.exports = router;


//https://cdn-api.co-vin.in/api