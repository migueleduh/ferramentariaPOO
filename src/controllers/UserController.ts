import User from "../models/User";
import Database from "../db/Database";
import UserService from "../service/UserService";
export default class UserController{
    private service: UserService;
    
    constructor(){
        this.service = new UserService();
    }

    public addUser(name: string, email:string){
        this.service.
    }

}   