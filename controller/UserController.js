var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
var User = require('../model/user');

router.post("/", (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(result => { console.log(result);
        })
        .catch( err => { console.log(err);
        });
    res.status(201).json(
        {
            message: "Handling post request to /user",
            user: user
        }
    );
});

module.exports = router;