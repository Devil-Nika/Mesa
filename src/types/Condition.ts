// Interfaz para Condiciones y Enfermedades
export interface Condition {
    id: string;
    name: string;
    type: 'condition' | 'disease';
    description: string;
    source: string;
    page: number | null;
    isSRD: boolean;
}