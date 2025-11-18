"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
class UserView {
    constructor(controller) {
        this.controller = controller;
    }
    showMainMenu() {
        let running = true;
        while (running) {
            console.log("-- Menu Gerenciar Usuarios --");
            console.log("1. Cadastrar novo usuário");
            console.log("2. Listar todos os usuários");
            console.log("3. Sair");
            const choice = readlineSync.question("Escolha uma opcao: ");
            switch (choice) {
                case '1':
                    this.showCreateUserForm();
                    break;
                case '2':
                    this.listAllUsers();
                    break;
                case '3':
                    running = false;
                    console.log("Retornando ao menu princiapal");
                    break;
                default:
                    console.log("Retornando ao menu Principal");
            }
        }
    }
    // My form to create a user.
    showCreateUserForm() {
        console.log("-- Cadastre Novo Usuário --");
        const name = readlineSync.question("Nome do usuario: ");
        const email = readlineSync.question("Email do Usuario: ");
        try {
            this.controller.addUser(name, email);
            console.log("✅ Usuário cadastrado com sucesso!");
        }
        catch (error) {
            console.error(`❌ Erro ao cadastrar usuário: ${error.message}`);
        }
    }
    // Method to list All of users.
    listAllUsers() {
        console.log("-- Lista de Usuários ---");
    }
}
exports.default = UserView;
