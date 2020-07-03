const express = require('express')
const router = express.Router()
const Project = require('../database/models/project')


console.log('Made it to project route')
// '/project'  routes
router.route('/').post(function(req, res) {
   Project.create(req.body, (err, post) =>{
       if(err ) return res.status(422).json({'project': 'project unable to be added'});
       res.json(post)
   });
});

router.route('/').get(function(req, res){
    Project.find((err, projects) =>{
        if(err) return res.status(422).json({'project': 'no projects found'});
        res.json(projects);
    });
});



module.exports = router;



