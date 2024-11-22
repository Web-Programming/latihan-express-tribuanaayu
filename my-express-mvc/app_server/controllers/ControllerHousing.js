const Housing = require('../models/housing');

const Index = (req, res, next) => {
    Housing.find({}, { __v: 0 })
      .then((hsg) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: hsg
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

const insert = (req, res, next) => {
    const hsg = new Housing({
      idhousing: req.body.idhousing,
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      photo: req.body.photo,
      availableUnits: req.body.availableUnits,
      wifi: req.body.wifi,
      laundry: req.body.laundry,
      aktif: true
    });
  
    hsg
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
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

//untuk menghandle request update Housing
const update = (req, res, next) => {
     Housing
       .findByIdAndUpdate(req.params.id,{
            idhousing: req.body.idhousing,
            name: req.body.name,
            city: req.body.city,
            state: req.body.state,
            photo: req.body.photo,
            availableUnits: req.body.availableUnits,
            wifi: req.body.wifi,
            laundry: req.body.laundry,
         })
        .then((result) => {
            Housing
            .findById(req.params.id)
            .then((hsg) =>{
                const responseMessage = {
                    code: 200,
                    success: true,
                    message: "Successfull",
                    data: hsg
                };
                res.status(200).json(responseMessage);
            });        
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });
};

//untuk menghandle request show detail
const show = (req, res, next) => {
    Housing
        .findById(req.params.id)
        .then((hsg) =>{
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: hsg
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
            };
            res.status(404).json(responseMessage);
        });
};

//untuk menghandle request delete
const destroy = (req, res, next) => {
    Housing
        .findByIdAndDelete(req.params.id)
        .then((hsg) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
            };
            res.status(200).json(responseMessage);
        }).catch((e) => {
            const responseMessage = {
                code: 404,
                success: false,
                message: "ID " + req.params.id + " Not Found",
                error: e
            };
            res.status(404).json(responseMessage);
        });
};


module.exports = {Index, insert, update, show, destroy};