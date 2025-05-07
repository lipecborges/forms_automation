import { appPrismaClient } from '../services/dbService';
import { Service } from '../types/interface/serviceInterface';

export class ServiceRepository {
    // Método para limpar todos os registros
    async clearAllServices(): Promise<void> {
        await appPrismaClient.service.deleteMany({});
        console.log("🧹 Todos os registros foram removidos");
    }

    // Método para buscar serviços ativos
    async findActiveServices(): Promise<Service[]> {
        return appPrismaClient.service.findMany({
            where: { isActive: true },
        });
    }

    // Método para inserir um registro de teste
    async insertTestService(): Promise<Service[]> {
        const services = [
            {
                name: 'Inscrição Estadual',
                endpoint: '/ticketsValidados/ie',
                isActive: true,
                processorType: 'processor-ie',
            },
            {
                name: 'Data Entrega AV',
                endpoint: '/ticketsValidados/dtentregaav',
                isActive: true,
                processorType: 'processor-dtentregaav',
            }
        ];


        const createdServices = await Promise.all(
            services.map(service =>
                appPrismaClient.service.create({
                    data: service,
                })
            )
        );

        return createdServices;
    }

    // Método para testar a inserção e busca
    async testServiceOperations(): Promise<void> {
        try {
            await this.clearAllServices();
            console.log("🔧 Inserindo serviços de teste...");
            const insertedServices = await this.insertTestService();
            console.log("✅ Serviços de teste inseridos:", insertedServices);

            console.log("🔍 Buscando serviços ativos...");
            const activeServices = await this.findActiveServices();
            console.log("✅ Serviços ativos encontrados:", activeServices);
        } catch (error) {
            console.error("❌ Erro durante o teste:", error);
        }
    }
}

// Instância da classe e execução das operações específicas
const serviceRepository = new ServiceRepository();
serviceRepository.clearAllServices()
    .then(() => serviceRepository.insertTestService())
    .then(services => console.log("✅ Serviço de teste inserido:", services))
    .catch(console.error);