const express = require("express");
const router = express.Router();
const vaccinelots_router = require("./contoller");
router.get("/api/moviedata/search", vaccinelots_router.getlots);
router.post("/create", vaccinelots_router.createlots);
module.exports = router;
