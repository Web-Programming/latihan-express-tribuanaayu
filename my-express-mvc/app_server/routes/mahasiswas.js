const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/ControllerMahasiswa");

//fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongoDB
router.get("/mahasiswa", mahasiswaController.Index);
module.exports = router;