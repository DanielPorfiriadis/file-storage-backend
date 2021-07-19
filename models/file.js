const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

const fileSchema = new mongoose.Schema({
    fileName: {
        type: String
    },
    uploadDate: {
         type: Date
    },
});

module.exports = mongoose.model('File', fileSchema);