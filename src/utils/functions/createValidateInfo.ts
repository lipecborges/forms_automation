import { SolicitaValidacaoSchema } from '../../schemas/glpi/ticketSchema';

export function createValidateInfo(
    conteudo: string,
    user_validate_id: number | undefined,
    group: string | undefined
): SolicitaValidacaoSchema {  // Retorna diretamente o tipo esperado
    return {
        conteudo,
        user_validate_id,
        group,
    };
}