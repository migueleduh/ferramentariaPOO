import { Repository, ObjectLiteral } from "typeorm";
import { AppDataSource } from "../data-source";

// 1. Definimos a classe com <T> (o tipo genérico)
export abstract class BaseService<T extends ObjectLiteral> {

    protected repository: Repository<T>;
    
    constructor(repository: Repository<T>) {
        this.repository = repository;
    }


    // Método Genérico de Busca
    // Ele recebe o nome da coluna (string) e o valor para buscar
    public async findByColumn(column: string, value: any): Promise<T | null> {
        
      return await this.repository.createQueryBuilder("entity").where(`entity.${column} = :value`, {value: value}).getOne();
   
    }
}