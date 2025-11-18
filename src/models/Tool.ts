import IgetDescription from "../interface/IgetDescription";
import  {ToolStatus } from "./ToolStatus"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import  MovementTool  from "./MovementTool";

@Entity({ name: "tool" })
export default class Tool implements IgetDescription{
    @PrimaryGeneratedColumn()
    private id!: number;

    @Column()
    private name: string = "";
    
    @Column({
        type: "enum",
        enum:ToolStatus,
        default: ToolStatus.AVAILABLE    
    })
    private status!: ToolStatus;

    @Column()
    private brand!: string;

    // "UMA Tool" está em "MUITOS Itens de Movimento"
    @OneToMany(() => MovementTool, (movementTool) => movementTool.tool)
    private movementTools!: MovementTool[]; // Histórico de 'itens'
    
    constructor(name: string, status: ToolStatus, brand: string){
        this.name = name;
        this.status = status;
        this.brand = brand;
    }
    getDescription(): string {
        return  "nome: " + this.name + 
                "status: " + this.status +
                " marca " + this.brand;
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