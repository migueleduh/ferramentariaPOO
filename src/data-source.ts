
// src/data-source.ts

// 1. Importa o "assistente"
// (Ele precisa ser o primeiro de todos, sempre!)
import "reflect-metadata"; 

// 2. Importa o "telefone" (o DataSource)
import { DataSource } from "typeorm";

import User from "./models/User";
import Specialty from "./models/Specialty";
import Professional from "./models/Professional";
import Tool from "./models/Tool";
import Movement from "./models/Movement";
import MovementTool from "./models/MovementTool";


export const AppDataSource = new DataSource({
    
    // O "tradutor" que vamos usar
    type: "mysql", 


    host: "localhost",


    port: 3306,

    // O "usuário" padrão do XAMPP
    username: "root",

    
    password: "",


    database: "ferramentaria_db", 

    // "Mágica 1": Isso diz ao TypeORM para criar as tabelas sozinho.
    synchronize: true, 

    // "Mágica 2": Isso mostra no terminal o que o TypeORM está fazendo.
    logging: true, 

    // Onde estão nossos "projetos" (Entities)?
    entities: [__dirname + "/models/*.ts"]

});