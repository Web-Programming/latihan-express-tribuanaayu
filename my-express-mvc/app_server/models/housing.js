const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({

});

//untuk membuat model
const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);
//harus di export agar bisa digunakan di controller
module.exports = Mahasiswa;