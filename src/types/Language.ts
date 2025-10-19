// Interfaz para Idiomas
export interface Language {
    id: string;
    name: string;
    type: string;
    script: string;
    description: string;
    source: string;
    page: number | null;
    isSRD: boolean;
}