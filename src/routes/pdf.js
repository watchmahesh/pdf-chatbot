const express = require("express");
const router = express.Router();
const pdfController = require("../controller/pdfController");
router.get("/", pdfController.view);
router.post("/upload", pdfController.uploadPdf);

module.exports = router;
