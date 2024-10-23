const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
    },
    npm:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    tanggal_lahir: {
        type: Date,
    },
    aktif: {
        type: Boolean,
    }
});

//untuk membuat model
const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);
//harus di export agar bisa digunakan di controller
module.exports = Mahasiswa;