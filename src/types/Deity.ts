// Interfaz para Deidades
export interface Deity {
    id: string;
    name: string;
    title: string;
    alignment: string;
    domains: string[];
    pantheon: string;
    symbol: string;
    description: string;
    source: string;
    page: number | null;
    isSRD: boolean;
}