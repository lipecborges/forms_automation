import { AdicionaAcompanhamentoSchema, Alert, Close, Content, Solve, Type, Error } from '../../schemas/glpi/ticketSchema';

export function createTicketInfo(
    content: Content,
    error: Error,
    type: Type,
    alert: Alert,
    solve: Solve,
    close: Close
): AdicionaAcompanhamentoSchema {  // Retorna diretamente o tipo esperado
    return {
        content,
        error,
        type,
        alert,
        solve,
        close,
    };
}