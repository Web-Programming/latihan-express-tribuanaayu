const Mahasiswa = require("../models/mahasiswa");

const Index = async (req,res) => {
    try{
        const mahasiswas = await Mahasiswa.find();
        res.status(200).json(mahasiswas);
        if(!mahasiswas){
            res.status(404).json({message: "Collection is Empty"});
        }
    } catch (error) {
        res.status(500).json({message: "Error retrieving users", error});
    }
}
//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const mhs = new Mahasiswa({
      nama: req.body.nama,
      npm: req.body.npm,
      email: req.body.email,
      tanggal_lahir: req.body.tanggal_lahir,
      aktif: true
    });
  
    mhs
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports ={ Index, insert };

