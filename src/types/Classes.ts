// Interfaz para características por nivel
export interface ClassFeatureByLevel {
    Level: string;
    'Proficiency Bonus': string;
    'Class Features': string;
    [key: string]: string; // Para propiedades específicas de cada clase
}

// Interfaz principal para Clases del SRD 5.2
export interface ClassSRD52 {
    id: string;
    name: string;
    hit_die: number;
    primary_ability: string;
    saving_throws: string[];
    skill_proficiencies: string[];
    weapon_proficiencies: string;
    armor_training: string;
    starting_equipment: string;
    features_by_level: ClassFeatureByLevel[];
    feature_descriptions: { [featureName: string]: string };
    spellcasting: boolean;
    source: string;
    version: string;
    isSRD: boolean;
    edition: string;
}

// Interfaz para el conjunto de datos de clases
export interface ClassesData {
    metadata: {
        type: string;
        version: string;
        source: string;
        processed_date: string;
        total_classes: number;
        srd_classes: number;
        non_srd_classes: number;
        edition: string;
    };
    classes: ClassSRD52[];
}

// Tipos de utilidad
export type ClassNames =
    | 'Barbarian' | 'Bard' | 'Cleric' | 'Druid' | 'Fighter' | 'Monk'
    | 'Paladin' | 'Ranger' | 'Rogue' | 'Sorcerer' | 'Warlock' | 'Wizard';

export type HitDie = 6 | 8 | 10 | 12;

export type PrimaryAbility =
    | 'Strength' | 'Dexterity' | 'Constitution'
    | 'Intelligence' | 'Wisdom' | 'Charisma';

// Interfaz para filtros de búsqueda
export interface ClassFilter {
    name?: string;
    primary_ability?: PrimaryAbility;
    hit_die?: HitDie;
    spellcasting?: boolean;
    source?: string;
    edition?: string;
}