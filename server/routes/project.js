const express = require('express')
const router = express.Router()
const Project = require('../database/models/project')


console.log('Made it to project route')
// '/project'  routes
router.route('/').post(function(req, res) {
   Project.create(req.body, (err, post) =>{
       if(err ) return res.status(422).json({'project': 'project added successfully'});
       res.json(post)
   });
    
        
});

module.exports = router;



/* .then(project => {
    res.status(200).json({'project': 'project added successfully'});
})
.catch(err => {
    res.status(422).send('Adding project failed');
}); */