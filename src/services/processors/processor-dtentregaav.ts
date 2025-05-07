import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { TicketSchema } from '../../schemas/glpi/ticketSchema';
import { httpClient } from '../httpClient';
import { TicketProcessor } from './processor.interface';


export class ProcessorDtentregaAv implements TicketProcessor {
    process(answer: GroupedAnswers, ticket: TicketSchema): GroupedAnswers {
        (async () => {
            console.log('console dentro do data carai de asa:');
            console.log(ticket);
        })();

        return answer;
    }
}