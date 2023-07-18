"use strict";
/**
 * Super-Market Project
 * Asaf Gilboa
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const PORT = process.env.PORT || 7070;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ credentials: true }));
app.use(express_1.default.json());
// const testRoute = require("./routes/testRoute");
// app.use("/test", testRoute);
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(" :) ");
    }
    catch (err) {
        console.log('error at empty request: ', err);
        res.status(500).send(err);
    }
}));
//# sourceMappingURL=server.js.map