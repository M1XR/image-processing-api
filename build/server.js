"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const sendDescription_1 = __importDefault(require("./middlware/sendDescription"));
const pageNotFound_1 = __importDefault(require("./middlware/pageNotFound"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', index_1.default);
// send description File to Browser
// app.get('/', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../', 'server.html'));
// });
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
app.use(sendDescription_1.default);
// handling status 404 Page not found
app.use(pageNotFound_1.default);
exports.default = app;
