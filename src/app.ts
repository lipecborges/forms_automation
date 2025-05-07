import { FormsFetcherService } from './services/formsFetcherService';

export class App {
    private ticketFetcher: FormsFetcherService;
    private readonly INTERVAL_MS = 6000; // 30 segundos em milissegundos

    constructor() {
        this.ticketFetcher = new FormsFetcherService();
    }

    async run() {
        console.log('Iniciando o serviço de processamento de tickets...');

        while (true) {
            try {
                const tickets = await this.ticketFetcher.fetchTickets();
                console.log('Tickets processados:', tickets);
                console.log(`Aguardando ${this.INTERVAL_MS / 1000} segundos para próxima execução...`);
                await new Promise(resolve => setTimeout(resolve, this.INTERVAL_MS));
            } catch (error) {
                console.error('Erro durante o processamento:', error);
                // Em caso de erro, ainda aguardamos o intervalo antes de tentar novamente
                await new Promise(resolve => setTimeout(resolve, this.INTERVAL_MS));
            }
        }
    }
}