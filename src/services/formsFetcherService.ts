import { ticketSchema } from '../schemas/glpi/ticketSchema';
import { GroupedAnswers, groupedAnswersSchema } from '../schemas/glpi/answerSchema';
import { httpClient } from '../services/httpClient';
import { ServiceRepository } from '../model/servicesModel';
import { ProcessorIe } from './processors/processor-ie';
import { TicketProcessor } from './processors/processor.interface';
import { AxiosError } from 'axios';
import { ProcessorDtentregaAv } from './processors/processor-dtentregaav';
import { ProcessorDtentregaOv } from './processors/processor-dtentregaov';
export class FormsFetcherService {
    private serviceRepository: ServiceRepository;
    private processors: Record<string, TicketProcessor>;

    constructor() {
        this.serviceRepository = new ServiceRepository();
        this.processors = {
            'processor-dtentregaov': new ProcessorDtentregaOv(),
            //'processor-ie': new ProcessorIe(),
            //'processor-dtentregaav': new ProcessorDtentregaAv(),
            // Adicionar processadores abaixo desse, assim que adicionar novas funcionalidadesT
        };
    }

    async fetchTickets(): Promise<GroupedAnswers[]> {
        const activeServices = await this.serviceRepository.findActiveServices();
        const promises: Promise<GroupedAnswers>[] = [];
        const answerEndpoint = '/answers/';

        for (const service of activeServices) {
            try {
                const rawData = await httpClient.get<any>(service.endpoint);
                const validatedData = ticketSchema.parse(rawData);
                const processor = this.processors[service.processorType];
                if (processor) {
                    for (const ticket of validatedData) {
                        try {
                            const endpoint = `${answerEndpoint}${ticket.id}`;
                            const rawAnswers = await httpClient.get<any>(endpoint);
                            const validatedAnswers = groupedAnswersSchema.parse(rawAnswers);
                            for (const answer of validatedAnswers) {
                                promises.push(processor.process(answer, ticket));
                            }
                        } catch (error) {
                            console.error(`Erro ao buscar respostas para o ticket ${ticket.id}:`, error);
                        }
                    }
                }
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.error(`Erro ao processar serviço ${service.name}:`, error.response?.data?.message);
                } else {
                    console.error(`Erro ao processar serviço ${service.name}:`, error);
                }
            }
        }
        const results = await Promise.all(promises);
        return results;
    }
}