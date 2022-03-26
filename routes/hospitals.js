const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const {
  getHospitals,
  getHospital,
  postHospital,
  putHospital,
  deleteHospital,
  getVacCenters
} = require("../controllers/hospitals");

//Include other resource routers
const appointmentRouter = require("./appointments");

//Re-route into other resource routers
router.use("/:hospitalId/appointments/", appointmentRouter);
router.route("/vacCenters").get(getVacCenters);
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
