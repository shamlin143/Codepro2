const express = require('express')
const router = express.Router()
const Project = require('../database/models/project')



// '/project'  routes
router.route('/').post(function(req, res) {
   Project.create(req.body, (err, post) =>{
       if(err ) return res.status(422).json({'project': 'project unable to be added'});
       res.json(post)
   });
});

// Get all projects
router.route('/').get(function(req, res){
    Project.find((err, projects) =>{
        if(err) return res.status(422).json({'project': 'no projects found'});
        res.json(projects);
    });
});

router.route('/:id').delete(function(req, res){
    Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
});

/* router.delete('/:id', function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
 */
module.exports = router;



