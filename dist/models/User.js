"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email) {
        this.name = "";
        this.active = true;
        this.email = "";
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getActive() {
        return this.active;
    }
    setActive(active) {
        this.active = active;
    }
}
exports.default = User;
