import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Professional from "./Professional"; // Importa o "outro lado".

@Entity({ name:"specialty" })
export default class Specialty{

    @PrimaryGeneratedColumn()
    private id!: number;

    @Column()
    private name!: string;

    // --- O Relacionamento (Lado "Um") ---
    // "UMA Especialidade tem MUITOS Profissionais"
    //
    // (professional) => professional.specialty:
    // "Para achar a conexão, olhe no model 'Professional'
    // e encontre o atributo 'specialty'. É lá que eu estou mapeado."


     // Uma especialidade pode ter muitos profissionais
@OneToMany(() => Professional, (professional) => professional.specialty)
  private professionals!: Professional[];


    constructor(name:string){
        this.name = name;
    }

    public getId():number{
        return this.id;
    }

    public getName():string{
        return this.name;
    }

    public setName(name: string){
        this.name = name;
    }
}    