const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    projectName: {type: String}
})


module.exports = mongoose.model('Project', projectSchema);