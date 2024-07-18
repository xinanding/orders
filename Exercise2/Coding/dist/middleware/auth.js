"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const basic_auth_1 = __importDefault(require("basic-auth"));
const authenticate = (req, res, next) => {
    const user = (0, basic_auth_1.default)(req);
    if (!user || user.name !== "admin" || user.pass !== "password") {
        res.set("WWW-Authenticate", 'Basic realm="KindredTech"');
        res.status(401).send("Authentication required.");
        return;
    }
    next();
};
exports.authenticate = authenticate;
