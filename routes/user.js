const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')


router.post('/', (req, res) => {
    const {
        username,
        password,
        email
    } = req.body
    // ADD VALIDATION
    User.findOne({
        username: username
    }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        } else {
            const newUser = new User({
                username: username,
                password: password,
                email: email
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    });
});

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username,
            
        };
        res.send(userInfo);
    }
)
// Get logged in user

router.get('/', (req, res ) => {
    console.log('===== project ======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.json({ user: null });
    }
});

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({
            msg: 'logging out'
        });
    } else {
        res.send({
            msg: 'no user to log out'
        });
    }
});

// Get all users
router.route('/users').get(function(req, res)  {
    User.find((err, users) => {
        if(err) return res.status(422).json({"User": "No Users Found"});
        res.json(users);
     }); 
});
//Get user by id
router.route('/users/:id').get(function(req, res){
    User.findById(req.params.id, (err, user)=>{
        if(err) return res.status(422).json({"User: ": "User not found"});
        res.json(user);
    });
});
// Delete user by id
router.route('/users/:id').delete(function(req, res){
    User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return res.status(422).json({"User": "Unable to delete project"});
        res.json(post);
      });
});

// Update user by Id
router.route('/:id').put(function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return res.status(422).json({"User": "Unable to update user"})
        res.json(post);
    });
});



module.exports = router