const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const {
  getHospitals,
  getHospital,
  postHospital,
  putHospital,
  deleteHospital
} = require("../controllers/hospitals");

router
  .route("/")
  .get(getHospitals)
  .post(protect, authorize("admin"), postHospital);
router
  .route("/:id")
  .get(getHospital)
  .put(protect, authorize("admin"), putHospital)
  .delete(protect, authorize("admin"), deleteHospital);
module.exports = router;
