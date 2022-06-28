"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
// send description File to Browser
const sendDescription = (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../', 'server.html'));
};
exports.default = sendDescription;
