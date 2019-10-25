"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
exports.getAllUsers = function (req, res) {
    user_1.User.find(function (error, users) {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        }
        else {
            res.json(users);
        }
    });
};
exports.getOneUser = function (req, res) {
    var id = req.params.id;
    user_1.User.find({ _id: id }, function (error, users) {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        }
        else {
            res.json(users[0]);
        }
    });
};
exports.createUser = function (req, res) {
    var _a = req.body, name = _a.name, email = _a.email, password = _a.password;
    var newUser = new user_1.User({ name: name, email: email, password: password });
    newUser.save(function (error, user) {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        }
        else {
            res.json(user);
        }
    });
};
exports.updateUser = function (req, res) {
    var id = req.params.id;
    var newParams = req.body;
    user_1.User.findOneAndUpdate({ _id: id }, newParams, function (error, user) {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        }
        else {
            res.json('changed');
        }
    });
};
exports.deleteUser = function (req, res) {
    var id = req.params.id;
    user_1.User.findOneAndDelete({ _id: id }, function (error, user) {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        }
        else {
            res.json('deleted');
        }
    });
};
