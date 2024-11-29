const mongoose = require('mongoose');
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    hash: String, //untuk menyimpan password terenkripsi
    salt: String
});
//setPassword untuk menampung inputan password berupa plainText, yang kemudian akan di enkripsi dengan metode hash
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
}
//validPassword untuk mengecek apakah setPassword sama dengan password yang dari hash
userSchema.methods.validPassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hash === hash;
}
//generateJwt untuk membuat expired password
userSchema.methods.generateJwt = function () {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7); // 7 hari
    return jwt.sign({
        //jangan memasukan data privasi
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, process.env.JWT_SECRET);
}
const User = mongoose.model('User', userSchema);
module.exports = User;