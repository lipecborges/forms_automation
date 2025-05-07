export interface Server {
    host: string;
    username: string;
    password: string;
    type: 'linux' | 'windows';
    name: string;
    disk: string;
}