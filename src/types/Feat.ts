// Interfaz para Dotes (Feats)
export interface Feat {
    id: string;
    name: string;
    description: string;
    prerequisites: string[];
    category: string;
    source: string;
    page: number | null;
    isSRD: boolean;
}