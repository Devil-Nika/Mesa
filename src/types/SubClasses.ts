// Interfaz para características de subclase
export interface SubclassFeature {
    name: string;
    description: string;
}

// Interfaz principal para Subclases del SRD 5.2
export interface SubclassSRD52 {
    id: string;
    name: string;
    class_name: string;
    class_id: string;
    description: string;
    features: SubclassFeature[];
    feature_levels: number[];
    source: string;
    version: string;
    isSRD: boolean;
    edition: string;
}

// Interfaz para el conjunto de datos de subclases
export interface SubclassesData {
    metadata: {
        type: string;
        version: string;
        source: string;
        processed_date: string;
        total_subclasses: number;
        srd_subclasses: number;
        non_srd_subclasses: number;
        edition: string;
        classes_covered: string[];
    };
    subclasses: SubclassSRD52[];
}

// Tipos de utilidad
export type SubclassNames =
    | 'Path of the Berserker' | 'College of Lore' | 'Life Domain'
    | 'Circle of the Land' | 'Champion' | 'Way of the Open Hand'
    | 'Oath of Devotion' | 'Hunter' | 'Thief' | 'Draconic Bloodline'
    | 'The Fiend' | 'School of Evocation';

// Interfaz para filtros de búsqueda
export interface SubclassFilter {
    name?: string;
    class_name?: string;
    class_id?: string;
    source?: string;
    edition?: string;
    has_spellcasting?: boolean;
}