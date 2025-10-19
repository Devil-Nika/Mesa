// Interfaz para Acciones
export interface Action {
    id: string;
    name: string;
    time: string;
    description: string;
    source: string;
    page: number | null;
    seeAlso: string[];
    isSRD: boolean;
    edition: string;
}