// Interfaz para Características Opcionales
export interface OptionalFeature {
    id: string;
    name: string;
    featureType: string[];
    description: string;
    source: string;
    page: number | null;
    isSRD: boolean;
}