import UserController from "../controller/UserController";
import * as readlineSync from 'readline-sync';

export default class UserView{
    //criando uma referencia ao controller para eu poder se comunicar com ele.
    private controller: UserController;

    constructor(controller: UserController){
        this.controller = controller;
    }

    public showMainMenu():void{
        let running = true;
        while(running){
            console.log("-- Menu Gerenciar Usuarios --");
            console.log("1. Cadastrar novo usuário");
            console.log("2. Listar todos os usuários");
            console.log("3. Sair");

            const choice = readlineSync.question("Escolha uma opcao: ");

            
        }
    }
}