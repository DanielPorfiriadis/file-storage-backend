const File = require("../models/file");

const multer = require('multer');
const multerConfig = require("../multer.config/multer.config");
const file = require("../models/file");

//Goes back to root directory
const folder = process.cwd() + '/uploads/';

//Multer inteceptor with storage configurations
var multerInteceptor = multer({ storage: multerConfig }).single("file");

exports.uploadFile = (req, res) => {
    multerInteceptor(req, res, (err) => {

        if(err) {
          res.status(400).send(err);
        }

        let currentDate = Date.now();

        const file = new File({
           uploadDate: currentDate,
           fileName: req.file.originalname,

       });
       
       file.save().then(savedFile => {
           res.status(200).json({
               message: 'File saved successfully',
           });
       });
      });
}

exports.downloadFile = (req, res) => {
    //Database used only for storing filename and date so that the latest file will be accessable with query.
    file.findOne({}, {}, {sort: {'uploadDate': -1} }, function(err, file){
        if(err){
            res.send(err);
        }
        res.download(folder + file.fileName);
    });
}