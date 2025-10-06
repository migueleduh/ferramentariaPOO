import Professional from "./Professional";
import Tool from "./Tool";
import User from "./User";

export default class Movements{
    private description: string = "";
    private tool: Tool;
    private professional: Professional;
    private date: Date; 

    constructor(description: string, tool: Tool, professional: Professional,date: Date){
        this.tool = tool;
        this.professional = professional;
        this. description = description;
        this.date = date;
    }

    public getDescription():string{
            return this.description;
    }

    public setDescription(description: string):void{
         this.description = description;
    }

}
