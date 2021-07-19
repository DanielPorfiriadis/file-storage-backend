const express = require("express");
const multer = require('multer');
let router = express.Router();
const controller = require("../controllers/controller");

router.post("/upload", (req, res) => {
    controller.uploadFile(req, res);
 });


router.get("/download", (req, res) => {
    controller.downloadFile(req, res);
 });

module.exports = router;