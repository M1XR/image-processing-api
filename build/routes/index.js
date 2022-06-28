"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("./api/image"));
const path_1 = __importDefault(require("path"));
const routes = express_1.default.Router();
// send description File to Browser
routes.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../', 'server.html'));
});
routes.use('/image', image_1.default);
exports.default = routes;
