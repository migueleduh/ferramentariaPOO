import Specialty from "./Specialty";
import User from "./User";
import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Entity, OneToOne} from "typeorm";


@Entity({ name: "professional" })
export default class Professional{

    @PrimaryGeneratedColumn()
    public id!: number; // ID Próprio

    // A "Ponte Física" (1-para-1)
    @OneToOne(() => User, { cascade: true }) 
    @JoinColumn({ name: "user_id" }) // Cria a coluna 'user_id'
    public user!: User;

    @Column()
    public registration: number = 0;

    @Column()
    public name!: string;

     @ManyToOne(() => Specialty)
    @JoinColumn({ name: "specialty_id" })
    specialty!: Specialty;
    

 // Construtor "Limpo" (NÃO tem 'super()')
    public constructor(name: string,registration: number, specialty: Specialty, user: User) {
        this.name = name;
        this.registration = registration;
        this.specialty = specialty;
        this.user = user; // <-- Apenas atribui
    }
    public getRegistration():number{
        return this.registration;
    }

    public setRegistration(registration:number):void{
        this.registration = registration;
    }

    public getSpecialty():Specialty{
        return this.specialty
    }

    public setSpecialty(specialty: Specialty){
        this.specialty = specialty;
    }
}