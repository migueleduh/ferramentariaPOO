// src/models/MovementTool.ts

import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Movement  from "./Movement";
import  Tool  from "./Tool";

@Entity({ name: "movement_tools" }) // Nome da tabela de junção
export default class MovementTool {

    @PrimaryGeneratedColumn()
    private id!: number;

    // --- 1. LIGAÇÃO COM O "CARRINHO" ---
    // "Muitos Itens" pertencem a "UM Carrinho (Movement)"
    @ManyToOne(() => Movement)
    @JoinColumn({ name: "movement_id" }) // Coluna física
    public movement!: Movement;

    // --- 2. LIGAÇÃO COM O "PRODUTO" ---
    // "Muitos Itens" apontam para "UMA Ferramenta (Tool)"
    @ManyToOne(() => Tool)
    @JoinColumn({ name: "tool_id" }) // Coluna física
    public tool!: Tool;

    constructor(movement: Movement, tool: Tool) {
        this.movement = movement;
        this.tool = tool;
    }
}