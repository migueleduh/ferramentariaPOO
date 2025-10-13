"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Database_1 = __importDefault(require("../db/Database"));
class UserController {
    constructor() {
        this.db = new Database_1.default();
    }
    createUser(name, email) {
        const user = new User_1.default(name, email);
        this.db.insertUser(user);
    }
    listAll() {
        this.db.selectAllUsers;
    }
}
exports.default = UserController;
