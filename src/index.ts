
import { AppDataSource } from "./data-source";
import User from "./models/User";
import Professional from "./models/Professional";
import Specialty from "./models/Specialty";
import Tool from "./models/Tool"; // Importe o Enum 'Status'
import Movement from "./models/Movement"; // Importe o Enum 'TipoMovimento'
import MovementTool from "./models/MovementTool";
import { ToolStatus } from "./models/ToolStatus";
import { TypeMovement } from "./models/TypeMovement";
import { off } from "process";

async function startApp() {
    try {
        await AppDataSource.initialize();
        console.log("🚀 Conexão com o banco inicializada!");

        // --- 1. PEGANDO OS REPOSITÓRIOS ---
        const specialtyRepo = AppDataSource.getRepository(Specialty);
        const professionalRepo = AppDataSource.getRepository(Professional);
        const userRepo = AppDataSource.getRepository(User);
        // Os novos
        const toolRepo = AppDataSource.getRepository(Tool);
        const movementRepo = AppDataSource.getRepository(Movement);
        const movementToolRepo = AppDataSource.getRepository(MovementTool);

        console.log("⚙️  Iniciando teste de RETIRADA...");

        // --- 2. CRIANDO OS DADOS BÁSICOS (Se o banco estiver limpo) ---
        // (Você pode comentar esta parte se o "Mecânico" e "João" já existem)
        console.log("Criando Especialidade e Profissional (se não existirem)...");
        let mecanico = await specialtyRepo.createQueryBuilder("specialty").where("specialty.name = :name" , { name: "Mecânico"} ).getOne();
        if (!mecanico) {
            mecanico = new Specialty("Mecânico");
            await specialtyRepo.save(mecanico);
        }

        let joaoUser = await userRepo.findOneBy({ email: "joao@email.com" });
        if (!joaoUser) {
            joaoUser = new User("João Mecânico", "joao@email.com", "senha123");
            await userRepo.save(joaoUser);
            
            const joaoProf = new Professional("Miguel",15043, mecanico, joaoUser);
            await professionalRepo.save(joaoProf);
        }
        console.log("✅ Dados básicos prontos!");

        // --- 3. TESTE DE RETIRADA (RF13) ---
        
        // Etapa A: Criar a ferramenta
        console.log("Criando a 'Furadeira'...");
        const furadeira = new Tool("Furadeira de Impacto",ToolStatus.AVAILABLE , "PAT-001");
        const broca = new Tool("Broca Metal", ToolStatus.AVAILABLE, "Bosch");

        await toolRepo.save(furadeira);
        await toolRepo.save(broca);

        console.log(`✅ 'Furadeira' criada com status: ${furadeira.getStatus()}`); 
        console.log(`✅  'Broca Metal' criada com status: ${broca.getStatus()}`); 

        // Etapa B: Buscar o profissional que está fazendo a retirada
        // (Precisamos do objeto 'Professional' completo, não só o 'User')
        const profissionalJoao = await professionalRepo.findOne({ 
            where: { user: { id: joaoUser.id } } 
        });

        if (!profissionalJoao) {
            throw new Error("Não achei o perfil profissional do João!");
        }

        // Etapa C: Criar o "Carrinho" (Movement)
        console.log("Criando o 'Carrinho' (Movement) para o João...");
        const retirada = new Movement(profissionalJoao, new Date, TypeMovement.SAIDA );
        await movementRepo.save(retirada);
        console.log(`✅ 'Carrinho' (ID: ${retirada.getId()}) criado para o Profissional ID: ${profissionalJoao.id}`);

        // Etapa D: Colocar o "Item" no "Carrinho" (MovementTool)
    
        console.log("Ligando a 'Furadeira' ao 'Carrinho'...");
        const items = [furadeira, broca];
        for(const item of items){
            const itemNoCarrinho = new MovementTool(retirada, item);
             await movementToolRepo.save(itemNoCarrinho);
               console.log("✅ Item (MovementTool) criado!");
        }

        // Etapa E: Atualizar o status da ferramenta (RF11)
        console.log("Atualizando status da 'Furadeira' para EM_USO...");
        console.log("Atualizando statu da 'Broca' para EM_USO...");

        furadeira.setStatus( ToolStatus.IN_USE);
        broca.setStatus(ToolStatus.IN_USE);

        await toolRepo.save(furadeira); // Salva a mudança no banco
        await toolRepo.save(broca);  
        console.log(`✅ Status da 'Furadeira' atualizado para: ${furadeira.getStatus()}`);
        console.log("Status da 'Broca' atualizado para: " + broca.getStatus());

        console.log("🎉 Teste de RETIRADA concluído com sucesso!");

    } catch (error) {
        console.error("❌ DEU RUIM! Erro no teste:", error);
    }
}


// Inicia a aplicação
startApp();