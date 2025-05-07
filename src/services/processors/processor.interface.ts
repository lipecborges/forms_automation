import { GroupedAnswers } from '../../schemas/glpi/answerSchema';

export interface TicketProcessor {
    process(data: GroupedAnswers): GroupedAnswers;
}