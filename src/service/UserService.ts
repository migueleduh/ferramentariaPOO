import { userInfo } from "os";
import UserController from "../controllers/UserController";
import { BaseService } from "./BaseService";
import User from "../models/User";
import { AppDataSource } from "../data-source";

export default class UserService extends BaseService<User>{
 
    constructor(){
        const repo = AppDataSource.getRepository(User);
        super(repo)
    }

    public async create(name: string, email: string, password: string){
        
    }
        
}