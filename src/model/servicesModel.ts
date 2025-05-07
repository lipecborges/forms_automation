import { appPrismaClient } from '../services/dbService';
import { Service } from '../types/interface/serviceInterface';


export class ServiceRepository {
    async findActiveServices(): Promise<Service[]> {
        return appPrismaClient.service.findMany({
            where: { isActive: true },
        });
    }
}