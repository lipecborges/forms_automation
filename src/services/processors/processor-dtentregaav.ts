import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { httpClient } from '../httpClient';
import { TicketProcessor } from './processor.interface';


export class ProcessorDtentregaav implements TicketProcessor {
    process(data: GroupedAnswers): GroupedAnswers {
        (async () => {
            
        })
        return data;
    }
}