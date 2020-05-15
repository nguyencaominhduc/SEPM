const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require('../model/User')

const checkAuth = require('../middleware/checkAuth')

router.post('/login', (req, res, next) => {
    User.find({ username: req.body.username })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Authentication failed'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Authentication failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        username: user[0].username,
                        userID: user[0]._id
                    },
                        "secret", {
                        expiresIn: "1h"
                    },
                    )
                    return res.status(200).json({
                        message: 'Authentication successful',
                        token: token,
                        tokenExpiration: 1,
                        userID: user[0].username
                    })
                }
                return res.status(401).json({
                    message: 'Authentication failed'
                })
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
})

router.get('/getUsers', checkAuth.checkHandler, (req, res, next) => {
    User.find({}, { username: 1, _id: 0 }, function (err, users) {
        res.send(users)
    })
})

router.post('/signup', (req, res, next) => {
    User.find({ username: req.body.username })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Username already exists'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            password: hash
                        })
                        user
                            .save()
                            .then(result => {
                                console.log(result)
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })
})

router.put('/changePassword', checkAuth.checkHandler, (req, res, next) => {
    User.find({ username: req.body.username })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(400).json({
                    message: 'No such username'
                })
            } else {
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (result) {
                        bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                            if (err) {
                                return res.status(500).json({
                                    error: err
                                });
                            } else {
                                User.findOneAndUpdate({ username: req.body.username }, {
                                    $set: {
                                        password: hash
                                    }
                                }, function (err, result) {
                                    return res.status(200).json({
                                        message: "Password changed successfully"
                                    })
                                })
                            }
                        })
                    } else {
                        return res.status(401).json({
                            message: 'Original password incorrect'
                        })
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
})

router.delete('/:username', checkAuth.checkHandler, (req, res, next) => {
    User.remove({ username: req.params.username })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted'
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
})


// bookmarking
router.get('/bookmark/:username', checkAuth.checkHandler, (req, res, next) => {
    User.find({ username: req.params.username }, { bookmark: 1, _id: 0 }, function (err, users) {
        res.send(users)
    })
})

router.post('/bookmark/:username&:itemId', checkAuth.checkHandler, (req, res, next) => {
    User.find({ username: req.params.username })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(409).json({
                    message: 'No such user found'
                })
            } else {
                User.find({ username: req.params.username }, { bookmark: 1, _id: 0 })
                    .exec()
                    .then(user => {
                        if (user[0].bookmark.includes(req.params.itemId)) {
                            return res.status(409).json({
                                message: 'Item already bookmarked'
                            })
                        } else {
                            User.findOneAndUpdate({ username: req.params.username }, {
                                $push: {
                                    bookmark: req.params.itemId
                                }
                            },{ 'new': true})
                                .exec()
                                .then(user => {
                                    res.send(user)
                                })
                                .catch(err => {
                                    console.log(err)
                                    res.status(500).json({
                                        error: err
                                    })
                                });
                        }
                    })
            }
        })
})

router.delete('/bookmark/:username&:itemId', checkAuth.checkHandler, async (req, res, next) => {
    User.findOneAndUpdate({ username: req.params.username }, {
        $pull: {
            bookmark: req.params.itemId
        }
    }, { 'new': true },
        function (err, result) {
            res.send(result)
        })
})

module.exports = router;
