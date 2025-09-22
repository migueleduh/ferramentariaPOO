"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movements {
    constructor(description, tool, professional, date) {
        this.description = "";
        this.tool = tool;
        this.professional = professional;
        this.description = description;
        this.date = date;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
}
exports.default = Movements;
