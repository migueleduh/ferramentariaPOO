//Definindo um tipo de dado para meu atributo
type ToolStatus = "Disponível" | "Emprestada" ;

export default class Tool{
    private name: string = "";
    private status: ToolStatus = "Disponível";
    
    constructor(name: string){
        this.name = name;
    }

     public getName():string{
        return this.name;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public getStatus():ToolStatus{
        return this.status;
    }

    public setStatus(status:ToolStatus):void{
        this.status = status;
    }
}