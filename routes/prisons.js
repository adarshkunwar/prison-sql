const Router = require("express");
const {
  // getData,
  postData,
  // getSingleData,
  // deleteData,
  // updateData,
} = require("../controller/prison.controller");
const router = Router();
router.route("/").post(postData);
// router.route("/:id").get(getSingleData).delete(deleteData).patch(updateData);
module.exports = router;
