const express = require("express");
const controller = require("../controllers");

const router = express.Router();

router.post("/subscription", controller.subscribe);
router.get("/subscription", controller.getSubscription);
router.put("/subscription", controller.updateOrCreateSubscription);
router.delete("/subscription", controller.unsubscribe);

module.exports = router;
