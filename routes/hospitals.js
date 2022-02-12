const express = require("express");
const router = express.Router();
const {
  getHospitals,
  getHospital,
  postHospital,
  putHospital,
  deleteHospital,
} = require("../controllers/hospitals");

router.route("/").get(getHospitals).post(postHospital);
router.route("/:id").get(getHospital).put(putHospital).delete(deleteHospital);
module.exports = router;
