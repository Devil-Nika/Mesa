// Interfaz para Razas
export interface Race {
    id: string;
    name: string;
    size: string;
    speed: number;
    abilityImprovements: string[];
    traits: string[];
    languages: string[];
    description: string;
    source: string;
    page: number | null;
    isSRD: boolean;
}