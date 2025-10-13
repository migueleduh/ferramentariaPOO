"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.tools = [];
        this.users = [];
        this.professionals = [];
        this.movement = [];
    }
    insertUser(user) {
        this.users.push(user);
    }
    insertTool(tool) {
        this.tools.push(tool);
    }
    insertMovement(movement) {
        this.movement.push(movement);
    }
    selectAllUsers() {
        ;
        return this.users;
    }
}
exports.default = Database;
