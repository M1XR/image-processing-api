"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// if a request failures with status 404 Page not fount
// send description File to Browser
const pageNotFound = (req, res) => {
    res.status(404);
    res.sendFile(path_1.default.join(__dirname, '../../', 'server.html'));
};
exports.default = pageNotFound;
