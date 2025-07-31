export function formatarDataBr(data: string): string {
    // Caso SAP OData: /Date(1658718000000)/
    if (data.startsWith('/Date(')) {
        const match = data.match(/\d+/);
        if (!match) return data;
        const timestamp = parseInt(match[0], 10);
        const dt = new Date(timestamp);
        const dia = String(dt.getDate()).padStart(2, '0');
        const mes = String(dt.getMonth() + 1).padStart(2, '0');
        const ano = dt.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    // Caso ISO: AAAA-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
    }

    // Retorna original se não for nenhum dos formatos
    return data;
}

export function parseDataBr(dataBr: string) {
    const [dia, mes, ano] = dataBr.split('/');
    return new Date(`${ano}-${mes}-${dia}`);
}