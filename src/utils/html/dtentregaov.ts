export const textoValidacaoLogistica = (ov: string, centro: string, dtatual: string, dtnova: string) =>
    `<div style="max-width: 500px; margin: 0 auto; font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
    <div style="text-align: center; background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <strong>Valide as informações e aprove ou recuse a alteração</strong>
    </div>

    <div style="background: #fff; border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 15px;">
        <div style="margin-bottom: 10px;">
            <strong>Ordem de Venda:</strong> <span style="color: #0066cc;">${ov}</span>
        </div>
        <div>
            <strong>Centro de Saída:</strong> ${centro}
        </div>
    </div>

    <div style="background: #fff; border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 15px;">
        <div style="margin-bottom: 12px; padding: 8px; background: #f8f8f8; border-radius: 3px;">
            <strong>DATA ATUAL:</strong> ${dtatual}
        </div>
        <div style="padding: 8px; background: #f0f8ff; border-radius: 3px;">
            <strong>DATA SOLICITADA:</strong> ${dtnova}
        </div>
    </div>

    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #666;">
        <div style="margin-bottom: 12px;">
            <strong style="color: red;">RECUSA:</strong> Chamado encerrado, sem alterações na ordem de venda.
        </div>
        <div>
            <strong style="color: #198754;">APROVAÇÃO:</strong> Data de entrega alterada na ordem de venda.
        </div>
    </div>
</div>`;

export const textoValidacaoGerente = (ov: string, centro: string, dtatual: string, dtnova: string) =>
    `<div style="max-width: 500px; margin: 0 auto; font-family: Arial, sans-serif; color: #333; line-height: 1.5;">

    <div style="text-align: center; background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <strong>Este processo precisa de validação</strong><br> <strong>Valide as informações e aprove ou recuse a
            alteração</strong>
    </div>

    <div style="background: #fff; border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 15px;">
        <div style="margin-bottom: 10px;">
            <strong>Ordem de Venda:</strong> <span style="color: #0066cc;">${ov}</span>
        </div>
        <div>
            <strong>Centro de Saída:</strong> ${centro}
        </div>
    </div>

    <div style="background: #fff; border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 15px;">
        <div style="margin-bottom: 12px; padding: 8px; background: #f8f8f8; border-radius: 3px;">
            <strong>DATA ATUAL:</strong> ${dtatual}
        </div>
        <div style="padding: 8px; background: #f0f8ff; border-radius: 3px;">
            <strong>DATA SOLICITADA:</strong> ${dtnova}
        </div>
    </div>

    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #666;">
        <div style="margin-bottom: 12px;">
            <strong style="color: red;">RECUSA:</strong> Chamado encerrado, sem alterações na ordem de venda.
        </div>
        <div>
            <strong style="color: #198754;">APROVAÇÃO:</strong> Será encaminhado um pedido de validação para o gerente de Planejamento e Logística.
        </div>
    </div>
</div>`;

export const textoValidacaoUnicaGerente = (ov: string, centro: string, dtatual: string, dtnova: string) =>
    `<div style="max-width: 500px; margin: 0 auto; font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
    <div style="text-align: center; background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <strong>Valide as informações e aprove ou recuse a alteração</strong>
    </div>

    <div style="background: #fff; border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 15px;">
        <div style="margin-bottom: 10px;">
            <strong>Ordem de Venda:</strong> <span style="color: #0066cc;">${ov}</span>
        </div>
        <div>
            <strong>Centro de Saída:</strong> ${centro}
        </div>
    </div>

    <div style="background: #fff; border: 1px solid #ddd; border-radius: 5px; padding: 15px; margin-bottom: 15px;">
        <div style="margin-bottom: 12px; padding: 8px; background: #f8f8f8; border-radius: 3px;">
            <strong>DATA ATUAL:</strong> ${dtatual}
        </div>
        <div style="padding: 8px; background: #f0f8ff; border-radius: 3px;">
            <strong>DATA SOLICITADA:</strong> ${dtnova}
        </div>
    </div>

    <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #666;">
        <div style="margin-bottom: 12px;">
            <strong style="color: red;">RECUSA:</strong> Chamado encerrado, sem alterações na ordem de venda.
        </div>
        <div>
            <strong style="color: #198754;">APROVAÇÃO:</strong> Data de entrega alterada na ordem de venda.
        </div>
    </div>
</div>`;

