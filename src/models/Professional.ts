import { Specialty } from "./Specialty";
import User from "./User";
export default class Professional extends User{
    private registration: number = 0;
    private specialty!:Specialty;

    public constructor(name:string, registration:number, email:string){
        super(name,email);
        this.registration = registration;

    }
    
    public getRegistration():number{
        return this.registration;
    }

    public setRegistration(registration:number):void{
        this.registration = registration;
    }

    public getDescription(): string {
        return super.getDescription() + " Especialidade: " + this.specialty; 
            
    }
}