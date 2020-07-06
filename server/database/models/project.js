const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {type: String}, 
    userName: {type: String},
    userId: {type: String},
    businessType: {type: String},
    appFeatures: {type: [String]},
    projectNotes: {type: String},
    fee: { type: String},
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Project', projectSchema);