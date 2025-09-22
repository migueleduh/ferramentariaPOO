import User from "../model/User";
import database from "../db/Database";
import Database from "../db/Database";
export default class UserController{
    private readonly db = new Database();


    public createUser(name: string):void{
        const user = new User(name);
        this.db.insertUser(user);
    }

    public listAll():string{
        
    }

    
}