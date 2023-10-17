const express = require("express");
const router = express.Router();

const chatController = require("../controller/chatController");

router.get("/", chatController.view);
router.post("/", chatController.postChat);

module.exports = router;
