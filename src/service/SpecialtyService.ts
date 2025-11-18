import Specialty from "../models/Specialty";
import { AppDataSource } from "../data-source";
import { BaseService } from "./BaseService";

export default class SpecialtyService extends BaseService<Specialty>{

    constructor(){
        const repo = AppDataSource.getRepository(Specialty);
        super(repo);
    }

    async create(name:string): Promise<Specialty>{

       const exist = await this.findByColumn("name",name);

       if(exist){
        console.log("O nome da Especialidade ja existe");
        return exist;
       }

       const specialty = new Specialty(name);
       return await this.repository.save(specialty);
    }       
}