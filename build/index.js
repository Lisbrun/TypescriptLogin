"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diares_1 = require("./routes/diares");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/ping', (_req, res) => {
    console.log('he ingresado');
    res.json('Hello world');
});
const PORT = 3000;
app.use('/api/diary/', diares_1.router);
app.listen(PORT, () => console.log(`Server is running on  http://localhost:${PORT}`));
