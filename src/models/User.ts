import IgetDescription from "../interface/IgetDescription";

export default class User implements IgetDescription{
    private name: string = "";
    private active: boolean = true;
    private email: string = "";
    
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
    public getDescription(): string {
       return "Nome: " +  this.name + " Email: " + this.email + " Status: " + this.active ;

    }

     public getName():string{
        return this.name;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public getActive():boolean{
        return this.active;
    }

    public setActive(active: boolean):void{
        this.active = active;
    }


}