"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Profissional {
    constructor(name, registration) {
        this.name = "";
        this.registration = 0;
        this.name = name;
        this.registration = registration;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getRegistration() {
        return this.registration;
    }
    setRegistration(registration) {
        this.registration = registration;
    }
}
exports.default = Profissional;
