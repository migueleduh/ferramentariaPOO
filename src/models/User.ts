import { Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import  Professional  from "./Professional";
import UserBase from "./UserBase"; // 1. IMPORTE O MOLDE

@Entity({ name: "user" }) 
// 2. HERDE DO MOLDE
export default class User extends UserBase {

    @PrimaryGeneratedColumn()
    public id!: number;

   // "Professional" = O nome da CLASSE
    // "user" = O nome da PROPRIEDADE 'public user' lá no Professional
    @OneToOne("Professional", "user", { nullable: true })
    public professional!: Professional | null; // Pode ser nulo (para Admins)
    
    // 4. O Construtor só precisa chamar o "super"
    constructor(name: string, email: string, password: string) {
        super(name, email, password);
    }

 
}