import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { TicketSchema } from '../../schemas/glpi/ticketSchema';

export interface TicketProcessor {
    process(answer: GroupedAnswers, ticket: TicketSchema): Promise<any>;
}