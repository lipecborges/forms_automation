import { generateHtml } from '../../utils/functions/generateStorageHtml';
import { executeCommand } from '../../utils/sshClient';
import { appPrismaClient } from '../dbService';
import { Server } from '../../types/interface/storageInterface';
import { httpClient } from '../httpClient';
import { createValidateInfo } from '../../utils/functions/createValidateInfo';

const winrm = require('nodejs-winrm');

export const checkStorage = async (server: Server): Promise<{ disk: string; usage: string; available: string }> => {
    console.log('Verificando servidor:', server.host, 'Tipo:', server.type);
    if (server.type === 'linux') {
        const diskFilter = server.disk ? `"${server.disk}"` : '-E "^/dev"';
        const command = `df -h --output=source,pcent,avail | grep ${diskFilter} | head -n 1`;
        try {
            console.log(`Tentando SSH para ${server.host} com usuário ${server.username}`);
            console.log(`Senha (início): ${server.password.slice(0, 3)}... (tamanho: ${server.password.length})`);

            const result = await executeCommand(server.host, server.username, server.password, command);
            console.log(`Resultado bruto do comando em ${server.host}: ${result}`);

            if (!result.trim()) {
                throw new Error('Nenhum dado retornado pelo comando df');
            }

            const [disk, usage, available] = result.trim().split(/\s+/);
            if (!disk || !usage || !available) {
                throw new Error('Formato de saída do comando df inválido');
            }

            return {
                disk: disk || server.disk || 'N/A',
                usage: usage || 'N/A',
                available: available || 'N/A',
            }; ""
        } catch (error: any) {
            console.error(`Erro ao conectar em ${server.host}: ${error.message}`);
            throw new Error(`Falha ao verificar armazenamento: ${error.message}`);
        }
    } else if (server.type === 'windows') {
        const psCommand = `powershell -Command "Get-CimInstance Win32_LogicalDisk -Filter 'DriveType=3' | Select-Object DeviceID,Size,FreeSpace | ConvertTo-Json"`;

        const auth = 'Basic ' + Buffer.from(server.username + ':' + server.password, 'utf8').toString('base64');
        const params: any = {
            host: server.host,
            port: 5985,
            path: '/wsman',
            auth,
        };

        try {
            console.log('Tentando criar shell para:', server.host);
            params['shellId'] = await winrm.shell.doCreateShell(params);
            if (!params['shellId']) throw new Error('Falha ao criar shell. Verifique autenticação, firewall e configuração do WinRM.');

            params['command'] = psCommand;
            console.log('Executando comando PowerShell:', psCommand);
            params['commandId'] = await winrm.command.doExecuteCommand(params);
            if (!params['commandId']) throw new Error('Falha ao executar comando no shell.');

            const result = await winrm.command.doReceiveOutput(params);
            console.log('Resultado completo:', JSON.stringify(result, null, 2));

            // Verificar se há erro na saída
            if (result.stderr && result.stderr.toString().trim()) {
                throw new Error('Erro retornado pelo WinRM: ' + result.stderr.toString());
            }

            // Tentar extrair a saída, independentemente do formato do result
            let stdout = '';
            if (typeof result === 'string') {
                stdout = result;
            } else if (result.stdout) {
                stdout = result.stdout.toString();
            } else if (result.data) {
                stdout = result.data.toString();
            } else {
                throw new Error('Falha ao receber saída do comando. Resultado: ' + JSON.stringify(result));
            }

            console.log('Saída bruta do PowerShell:', stdout);

            await winrm.shell.doDeleteShell(params);

            let disks: any;
            try {
                disks = JSON.parse(stdout);
                if (!disks) throw new Error('Nenhum dado retornado pelo PowerShell.');
                disks = Array.isArray(disks) ? disks : [disks];
            } catch (e) {
                throw new Error('Erro ao fazer parse do JSON retornado: ' + (e as Error).message + ' | Saída: ' + stdout);
            }

            // Log para depuração dos valores de DeviceID
            console.log('Discos disponíveis:', disks.map((d: any) => d.DeviceID));

            // Filtrar pelo disco especificado em server.disk ou default para C:
            const targetDisk = server.disk ? server.disk.toUpperCase() : 'C:';
            console.log('Procurando disco:', targetDisk);

            let diskInfo = server.disk
                ? disks.find((d: any) => d.DeviceID.toUpperCase().includes(server.disk.toUpperCase()))
                : disks.find((d: any) => d.DeviceID.toUpperCase().includes('C:'));

            console.log('diskInfo:', diskInfo);
            if (!diskInfo) {
                throw new Error(`Disco ${targetDisk} não encontrado. JSON retornado: ` + JSON.stringify(disks));
            }

            const sizeGB = Number(diskInfo.Size) / (1024 ** 3);
            const freeGB = Number(diskInfo.FreeSpace) / (1024 ** 3);
            const usedPercent = ((1 - freeGB / sizeGB) * 100).toFixed(1) + '%';
            return {
                disk: diskInfo.DeviceID,
                usage: usedPercent,
                available: freeGB.toFixed(2) + ' GB',
            };
        } catch (error: any) {
            throw new Error(`Falha ao verificar armazenamento no Windows: ${error.message}`);
        }
    }
    throw new Error('Tipo de servidor desconhecido.');
};

export const main = async () => {
    const servers = await appPrismaClient.servidores.findMany({
        where: {
            enabled: true
        },
        select: {
            host: true,
            username: true,
            password: true,
            type: true,
            name: true,
            disk: true
        }
    });
    const storageResults: { host: string; type: string; storage: string; available: string; name: string }[] = [];

    for (const server of servers) {
        try {
            const { usage, available } = await checkStorage(server);
            storageResults.push({
                host: server.host,
                type: server.type.toUpperCase(),
                name: server.name.toUpperCase() || server.host,
                storage: usage, // Percentual de uso
                available, // Espaço disponível em GB
            });
        } catch (error: any) {
            console.error('Erro ao processar servidor', server.host, error);
            storageResults.push({
                host: server.host,
                type: server.type.toUpperCase(),
                name: server.name.toUpperCase() || server.host,
                storage: `Erro: ${error.message}`,
                available: 'N/A',
            });
        }
    }

    const novoTicketEndpoint = '/novoTicket'

    const ticketInfo = {
        name: 'Armazenamento Servidores',
        content: `${generateHtml(storageResults)}`,
        itilcategories_id: '188',
        _users_id_requester: "277",
        _groups_id_assign: "3",
        type: 'armazenamento'
    }

    const novoTicket: any = await httpClient.post(novoTicketEndpoint, ticketInfo)
    const ticketId = novoTicket.id

    const solicitaValidacaoEndpoint = `/solicitaValidacao/${ticketId}`;
    let userValidateId: number | undefined
    const GRUPO_VALIDACAO = 'Ti - Sistemas'
    const mensagemValidacao = 'Por gentileza, valide as informações e aprove ou recuse a alteração.';
    const validateInfo = createValidateInfo(mensagemValidacao, userValidateId, GRUPO_VALIDACAO);

    const solicitaValidacao = await httpClient.post(solicitaValidacaoEndpoint, validateInfo)

    //return novoTicket
    const html = generateHtml(storageResults);



    return html;
};

if (require.main === module) {
    main()
        .then((html) => {
            console.log('Relatório gerado com sucesso!');
            const fs = require('fs');
            fs.writeFileSync('relatorio-servidores.html', html);
            console.log('Arquivo relatorio-servidores.html salvo.');
        })
        .catch((err) => {
            console.error('Erro ao gerar relatório:', err);
        });
}