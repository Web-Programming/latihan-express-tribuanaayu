const express = require('express');
const router = express.Router();

const mahasiswaController = require('../controllers/ControllerMahasiswa');// -> router menggunakan controller ControllerMahasiswa
router.get('/mahasiswa', mahasiswaController.Index);
router.post('/mahasiswa/insert', mahasiswaController.insert);
router.patch('/mahasiswa/update/:id', mahasiswaController.update);
router.delete('/mahasiswa/delete/:id', mahasiswaController.destroy);
module.exports = router;