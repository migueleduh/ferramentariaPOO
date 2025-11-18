import UserController from "../controllers/UserController";
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
        public showCreateUserForm():void{
            console.log("-- Cadastre Novo Usuário --");

            const name = readlineSync.question("Nome do usuario: ");
            const email = readlineSync.question("Email do Usuario: ");

        try {
              this.controller.addUser(name, email);
               console.log("✅ Usuário cadastrado com sucesso!");
            } catch (error: any){
                console.error(`❌ Erro ao cadastrar usuário: ${error.message}`);
            }
        }

        // Method to list All of users.

        public listAllUsers(): void{
            console.log("-- Lista de Usuários ---");

        }



}