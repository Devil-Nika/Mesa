// Interfaz para Objetos
export interface Item {
    id: string;
    name: string;
    type: string;
    rarity: string;
    weight: number | null;
    value: number | null;
    description: string;
    source: string;
    page: number | null;
    isSRD: boolean;
}