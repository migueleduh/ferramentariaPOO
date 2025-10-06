export default class User{
    private name: string = "";
    private active: boolean = true;
    private email: string = "";
    
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
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