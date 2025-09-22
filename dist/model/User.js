"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.name = "";
        this.active = true;
        this.name = name;
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
