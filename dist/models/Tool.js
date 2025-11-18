"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tool {
    constructor(name) {
        this.name = "";
        this.status = "Disponível";
        this.brand = "";
        this.name = name;
    }
    getDescription() {
        return "nome: " + this.name +
            "status: " + this.status +
            "marca" + this.brand;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}
exports.default = Tool;
