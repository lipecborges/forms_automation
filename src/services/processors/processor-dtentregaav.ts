import { atualizaDataProcesso } from '../../controllers/vmix/updateController';
import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { TicketSchema } from '../../schemas/glpi/ticketSchema';
import { AlteraDataAvFormulario } from '../../types/interface/dtEntregaAvInterface';
import { createTicketInfo } from '../../utils/functions/createTicketInfo';
import { httpClient } from '../httpClient';
import { TicketProcessor } from './processor.interface';


export class ProcessorDtentregaAv implements TicketProcessor {
    process(answer: GroupedAnswers, ticket: TicketSchema): any {
        (async () => {
            let ticketId = ticket.id;
            const addAcompanhamentoEndpoint = `/adicionaAcompanhamento/${ticketId}`;
            const tipoForm = 'dtentregaav';
            let mensagemErro = '';
            let mensagemAlerta = '';
            let mensagemSucesso = '';
            let closeTicket = true;
            let solveTicket = true;
            let ticketInfo;

            console.log('answer:', answer)

            let requesterLocation = ticket.requester['location']
            if (answer.questions['Filial'] != null && answer.questions['Filial'] != undefined) {
                requesterLocation = answer.questions['Filial'];
            }


            if (requesterLocation == null || requesterLocation == undefined) {
                return {
                    status: 400,
                    message: 'Nâo foi encontrado a localização do solicitante',
                }
            }

            let filialText = requesterLocation.match(/\d+/);
            let filial = filialText ? parseInt(filialText[0], 10) : null;

            const formulario: AlteraDataAvFormulario = {
                nomeSolicitante: ticket.requester.name.substring(0, 20),
                filial: filial,
                dataProcesso: answer.questions['Entregas_do_dia'],
                dataEntrega: answer.questions['Entregas_para_o_dia'],
            };

            console.log('formulario:', formulario);

            const atualizaDataEntrega = await atualizaDataProcesso(formulario);
            if (atualizaDataEntrega.status == 400) {
                mensagemErro = atualizaDataEntrega.message;
                closeTicket = true;
                solveTicket = true;
            } else {
                mensagemSucesso = atualizaDataEntrega.message;
                closeTicket = true;
                solveTicket = true;
            }
            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);

            return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo)
            //console.log(ticket);
        })();

        return ticket;
    }
}