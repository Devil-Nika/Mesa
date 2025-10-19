// Interfaz para Trasfondos
export interface Background {
    id: string;
    name: string;
    description: string;
    abilityImprovements: string[];
    skillProficiencies: string[];
    languageProficiencies: string[];
    toolProficiencies: string[];
    feats: string[];
    source: string;
    page: number | null;
    isSRD: boolean;
    edition: string;
}