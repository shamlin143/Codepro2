const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectName: {type: String}, 
    userName: {type: String},
    userId: {type: String},
    businessType: {type: String},
    projectDescription: {type: String},
    projectFeatures:  [String],
    projectNotes: {type: String},
    fee: { type: String},
    email: {type: String, required: true},
    date: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Project', projectSchema);