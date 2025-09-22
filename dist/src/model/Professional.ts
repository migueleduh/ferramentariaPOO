import { Rule } from "./Rule";
import User from "./User";
export default class Professional extends User{
    private registration: number = 0;
    private rule!:Rule;

    public constructor(name:string, registration:number){
        super(name);
        this.registration = registration;

    }
    
    public getRegistration():number{
        return this.registration;
    }

    public setRegistration(registration:number):void{
        this.registration = registration;
    }



}