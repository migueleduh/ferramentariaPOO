"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Professional extends User_1.default {
    constructor(name, registration, email) {
        super(name, email);
        this.registration = 0;
        this.registration = registration;
    }
    getRegistration() {
        return this.registration;
    }
    setRegistration(registration) {
        this.registration = registration;
    }
}
exports.default = Professional;
