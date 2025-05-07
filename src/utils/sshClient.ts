// src/utils/sshClient.ts
import { NodeSSH } from 'node-ssh';

export const executeCommand = async (
    host: string,
    username: string,
    password: string,
    command: string
): Promise<string> => {
    const ssh = new NodeSSH();

    try {
        console.log(`Iniciando conexão SSH para ${host} com usuário ${username}`);
        console.log(`Senha (início): ${password.slice(0, 3)}... (tamanho: ${password.length})`);

        await ssh.connect({
            host,
            username,
            password,
            port: 22, // Porta padrão SSH
            tryKeyboard: true, // Suporta autenticação interativa
            readyTimeout: 15000, // Timeout de 15 segundos
            keepaliveInterval: 10000, // Mantém a conexão ativa
            keepaliveCountMax: 3,
            algorithms: {
                kex: [
                    'curve25519-sha256',
                    'curve25519-sha256@libssh.org',
                    'ecdh-sha2-nistp256',
                    'ecdh-sha2-nistp384',
                    'ecdh-sha2-nistp521',
                    'diffie-hellman-group-exchange-sha256',
                    'diffie-hellman-group14-sha256',
                    'diffie-hellman-group16-sha512',
                    'diffie-hellman-group18-sha512',
                ],
                cipher: [
                    'aes256-ctr',
                    'aes192-ctr',
                    'aes128-ctr',
                    'aes256-gcm@openssh.com',
                    'aes128-gcm@openssh.com',
                ],
            },
        });

        console.log(`Conexão estabelecida. Executando comando: ${command}`);
        const result = await ssh.execCommand(command);

        if (result.stderr) {
            throw new Error(`Erro no comando: ${result.stderr}`);
        }

        console.log(`Saída do comando: ${result.stdout}`);
        return result.stdout;
    } catch (error: any) {
        console.error(`Erro SSH em ${host}:`, error);
        throw new Error(`Falha na autenticação SSH: ${error.message}`);
    } finally {
        ssh.dispose();
    }
};