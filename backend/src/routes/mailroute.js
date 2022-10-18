"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var mailservices_1 = require("../services/mailservices");
exports.router = (0, express_1.Router)();
exports.router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
exports.router.post("/", mailservices_1.testpasser.sendingmail);
