import { dadosOvSchema, DadosOV } from '../../schemas/sap/dadosOvSchema';

export function mapSalesOrder(salesOrderRaw: any): DadosOV {
    const d = salesOrderRaw?.d || {};

    const dadosOV = {
        ordem: d.ORDEM || '',
        centro: d.CENTRO || '',
        dataCriacao: d.DATA_CRIACAO || '',
        dataEntrega: d.DATA_ENTREGA || '',
        criadoPor: d.CRIADO_POR || '',
        tipoDoc: d.TIPO_DOC || '',
        valorLiquido: d.VALOR_LIQUIDO || '',
        vendedor: d.VENDEDOR || '',
        nomeVendedor: d.NOME_VENDEDOR || '',
        pedido: d.PEDIDO || '',
        emissorOrdem: d.EMISSOR_ORDEM || '',
        nomeEmissor: d.NOME_EMISSOR || '',
    };

    // Valida o objeto antes de retornar
    return dadosOvSchema.parse(dadosOV);
}