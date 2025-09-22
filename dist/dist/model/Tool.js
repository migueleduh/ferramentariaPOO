"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tool {
    constructor(name) {
        this.name = "";
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.default = Tool;
