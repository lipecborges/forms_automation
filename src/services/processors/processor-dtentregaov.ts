import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { TicketSchema } from '../../schemas/glpi/ticketSchema';
import { createTicketInfo } from '../../utils/functions/createTicketInfo';
import { sapOdataClient }  from '../sapOdataClient';
import { TicketProcessor } from './processor.interface';

export class ProcessorDtentregaAv implements TicketProcessor {
    process(answer: GroupedAnswers, ticket: TicketSchema): any {
        (async () => {
            const OV = '2752746';
            const ovServiceEndpoint = '/ZOV_SRV'
            const ovHeaderEndpoint  = '/SALES_ORDER_HEADERSet'
            const format = '?$format=json';
            const endpoint = `${ovServiceEndpoint}${ovHeaderEndpoint}('${OV}')${format}`;
            const salesOrders = await sapOdataClient.get(endpoint);

            console.log('Ordem de Venda:', salesOrders);
        })();

        return ticket;
    }
}