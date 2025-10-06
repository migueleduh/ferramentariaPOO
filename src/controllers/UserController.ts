import User from "../models/User";
import database from "../db/Database";
import Database from "../db/Database";
export default class UserController{
    private readonly db = new Database();


    public createUser(name: string, email: string):void{
        const user = new User(name,email);
        this.db.insertUser(user);
    }

    public listAll():string{
        this.db.selectAllUsers;
    }

    
}