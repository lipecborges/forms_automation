import { appPrismaClient } from '../services/dbService';
import { Service } from '../types/interface/serviceInterface';

export class ServiceRepository {
    // Método para buscar serviços ativos
    async findActiveServices(): Promise<Service[]> {
        return appPrismaClient.service.findMany({
            where: { isActive: true },
        });
    }

    // Método para inserir um registro de teste
    async insertTestService(): Promise<Service> {
        const testService = {
            name: 'Inscrição Estadual',
            endpoint: '/ticketsValidados/ie',
            isActive: true,
            processorType: 'processor-ie',
        };

        const storageService = {
            name: 'Armazenamento',
            endpoint: 'null',
            isActive: true,
            processorType: 'processor-storage',
        };

        return appPrismaClient.service.create({
            data: testService,
        });
    }

    // Novo método para limpar a tabela Service
    async clearServices(): Promise<void> {
        await appPrismaClient.service.deleteMany({});
        console.log("🧹 Tabela Service limpa com sucesso!");
    }

    // Método para testar a inserção, busca e limpeza
    async testServiceOperations(): Promise<void> {
        try {
            // Limpa a tabela antes de começar (opcional, comente se não quiser)
            console.log("🔧 Limpando a tabela Service...");
            await this.clearServices();

            // Insere um serviço de teste
            console.log("🔧 Inserindo serviço de teste...");
            const insertedService = await this.insertTestService();
            console.log("✅ Serviço de teste inserido:", insertedService);

            // Busca serviços ativos
            console.log("🔍 Buscando serviços ativos...");
            const activeServices = await this.findActiveServices();
            console.log("✅ Serviços ativos encontrados:", activeServices);
        } catch (error) {
            console.error("❌ Erro durante o teste:", error);
        }
    }
}

// Instância da classe e execução automática do teste
const serviceRepository = new ServiceRepository();
serviceRepository.testServiceOperations().catch(console.error);