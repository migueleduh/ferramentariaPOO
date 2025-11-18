import { Type } from "mysql2/typings/mysql/lib/parsers/typeCast";
import Professional from "./Professional";
import Tool from "./Tool";
import ToolMovement from "./MovementTool";
import { TypeMovement } from "./TypeMovement";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToMany } from "typeorm";
import MovementTool from "./MovementTool";


@Entity({ name: "movement" })
export default class Movement{
    @PrimaryGeneratedColumn()
    private id!: number;

    @ManyToOne(() => Professional)
    @JoinColumn({ name: "professional_id" }) // Coluna física "professional_id"
    public professional!: Professional; // (public para o @OneToMany dele)
  

// --- DADOS DO CARRINHO ---
    @Column({
        type: "enum",
        enum: TypeMovement,
    })
    private type!: TypeMovement; // 'saida' ou 'entrada'

    @CreateDateColumn()
    private date: Date; 

    @OneToMany(() => MovementTool, (movementTool) => movementTool.movement)
    private movementTool!: MovementTool[];

    constructor( professional: Professional,date: Date, type: TypeMovement){
        this.professional = professional;     
        this.date = date;
        this.type = type;
    }

    public getId(): number {
        return this.id;
    }

    
}
