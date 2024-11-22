const express = require('express');
const router = express.Router();

const housingController = require('../controllers/ControllerHousing');// -> router menggunakan controller ControllerMahasiswa
router.get('/', housingController.Index);
router.post('/insert', housingController.insert);
router.patch('/update/:id', housingController.update);
router.delete('/delete/:id', housingController.destroy);
module.exports = router;