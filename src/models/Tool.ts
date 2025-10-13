import IgetDescription from "../interface/IgetDescription";

//Definindo um tipo de dado para meu atributo
type ToolStatus = "Disponível" | "Emprestada" ;

export default class Tool implements IgetDescription{
    private name: string = "";
    private status: ToolStatus = "Disponível";
    private brand: string = "";
    
    constructor(name: string){
        this.name = name;
    }
    getDescription(): string {
        return  "nome: " + this.name + 
                "status: " + this.status +
                "marca" + this.brand;
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