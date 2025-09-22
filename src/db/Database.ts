import Movements from "../model/Movement";
import Professional from "../model/Professional";
import Tool from "../model/Tool";
import User from "../model/User";

export default class Database{
    private tools:Tool[] = [];
    private users: User[] = [];
    private professionals: Professional[] = [];
    private movements: Movements[] = [];

    constructor(){
        
    }

    public insertUser(user:User):void{
        this.users.push(user);
    }

    public insertTool(tool:Tool):void{
        this.tools.push(tool);
    }

    public insertMovement(movement:Movements){
        this.movements.push(movement);
    }

}