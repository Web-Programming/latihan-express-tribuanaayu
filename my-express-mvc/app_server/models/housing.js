const mongoose = require("mongoose");

<<<<<<< HEAD
const mahasiswaSchema = new mongoose.Schema({

});

//untuk membuat model
const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);
//harus di export agar bisa digunakan di controller
module.exports = Mahasiswa;
=======
const housingSchema = new mongoose.Schema({
    idhousing: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    availableUnits: {
        type: Number,
        required: true
    },
    wifi: {
        type: Boolean,
        required: true
    },
    laundry: {
        type: Boolean,
        required: true
    }
});

const Housing = mongoose.model('Housing', housingSchema);
module.exports = Housing;
>>>>>>> 42554c41e4b3855932021bca9749ec6bb6dd0ca3
