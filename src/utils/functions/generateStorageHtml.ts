export function generateHtml(results: { host: string; type: string; storage: string; available: string; name: string }[]): string {
    return `
        <h2 style="font-family: 'Segoe UI', Arial, sans-serif; font-size: 1.8em; font-weight: 600; color: #02314F; text-align: center; margin: 20px 0; text-transform: uppercase; letter-spacing: 1px;">Armazenamento de Servidores</h2>
        <table style="width: 100%; border-collapse: collapse; font-family: 'Segoe UI', Arial, sans-serif; font-size: 1em; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);">
            <tr>
                <th style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; background: linear-gradient(to right, #02314F, #073552); color: #fff; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px;">Nome</th>
                <th style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; background: linear-gradient(to right, #02314F, #073552); color: #fff; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px;">Host</th>
                <th style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; background: linear-gradient(to right, #02314F, #073552); color: #fff; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px;">Tipo</th>
                <th style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; background: linear-gradient(to right, #02314F, #073552); color: #fff; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px;">Armazenamento</th>
            </tr>
            ${results
            .map((r) => {
                const isError = r.storage.includes('Erro');
                const usageNumber = parseInt(r.storage.replace('%', '')) || 0;
                const isWarning = !isError && usageNumber >= 80;
                const color = isError ? '#c0392b' : isWarning ? '#e67e22' : '#005f99';
                const fontStyle = isError ? 'italic' : 'normal';
                const displayText = isError ? r.storage : `${r.storage} (${r.available} livres)`;
                return `
                        <tr style="background-color: ${usageNumber % 2 === 0 ? '#f8fafc' : 'transparent'}; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#e3f0ff'" onmouseout="this.style.backgroundColor='${usageNumber % 2 === 0 ? '#f8fafc' : 'transparent'}'">
                            <td style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; color: #333;">${r.name || r.host}</td>
                            <td style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; color: #333;">${r.host}</td>
                            <td style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; color: #333;">${r.type}</td>
                            <td style="padding: 16px; text-align: center; border-bottom: 1px solid #e0e4e8; color: ${color}; font-weight: 500; font-style: ${fontStyle}; white-space: nowrap;">${displayText}</td>
                        </tr>
                    `;
            })
            .join('')}
        </table>
    `;
}