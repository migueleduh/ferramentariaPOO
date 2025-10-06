import IgetDescription from "../interface/IgetDescription";

export default class LogService{
    //metodo que gera log no sistema de arquivos do pc.

    public createLogFile(description: IgetDescription){
        //regras para escrita no arquivo.
        description.getDescription();
    }
}