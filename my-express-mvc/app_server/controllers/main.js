//Controller Index
const index = (req, res) => {
    res.render("index", {title : "Express MVC"});
}

//Controller Kontak
const contact = (req, res) => {
    res.render("contact", {title : "Ini Halaman Contact"});
}

//Controller Profile
const profile = (req, res) => {
    res.render("profile", {title : "Ini Halaman Profile"});
}

module.exports = {index, contact, profile}; //setiap membuat controller, harus meng-EXPORTS agar dapat digunakan oleh routes