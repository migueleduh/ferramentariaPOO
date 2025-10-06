import Movement from "../models/Movement";
import Professional from "../models/Professional";
import Tool from "../models/Tool";
import User from "../models/User";

export default class Database{
    private tools:Tool[] = [];
    private users: User[] = [];
    private professionals: Professional[] = [];
    private movement: Movement[] = [];

    constructor(){
        
    }

    public insertUser(user:User):void{
        this.users.push(user);
    }

    public insertTool(tool:Tool):void{
        this.tools.push(tool);
    }

    public insertMovement(movement:Movement){
        this.movement.push(movement);
    }

    public selectAllUsers():User[]{;
        return this.users;
    }
}