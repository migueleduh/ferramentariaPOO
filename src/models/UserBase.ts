import { Column } from "typeorm";
import IgetDescription from "../interface/IgetDescription";


export default abstract class UserBase implements IgetDescription {

    // Usamos @Column() para que as classes filhas (User)
    // herdem as colunas do banco
    @Column()
    protected name: string = "";

    @Column({ unique: true })
    protected email: string = "";

    @Column()
    protected password: string = "";

    @Column()
    protected active: boolean = true;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public getDescription(): string {
        return "Nome: " + this.name + " Email: " + this.email + " Status: " + this.active;
    }

    public getName():string{
         return this.name;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public getEmail():string{
        return this.email;
    }

    public setEmail(email:string):void{
        this.email = email;
    }

    public getActive():boolean{
     return this.active;   
    }

    public setActive(active:boolean):void{
        this.active = active;
    }

    public setPassword(password: string){
        this.password = password;
    }
   
}