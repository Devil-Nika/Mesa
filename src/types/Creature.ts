// Interfaz para Criaturas (Bestiario)
export interface Creature {
    id: string;
    name: string;
    size: string;
    type: string;
    alignment: string;
    armorClass: number;
    hitPoints: {
        average: number;
        formula: string;
    };
    speed: {
        walk: number | null;
        fly: number | null;
        swim: number | null;
        climb: number | null;
        burrow: number | null;
    };
    abilityScores: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
    savingThrows: {
        strength: string | null;
        dexterity: string | null;
        constitution: string | null;
        intelligence: string | null;
        wisdom: string | null;
        charisma: string | null;
    };
    skills: { [key: string]: string };
    damageResistances: string[];
    damageImmunities: string[];
    conditionImmunities: string[];
    senses: string[];
    languages: string[];
    challengeRating: {
        rating: string;
        xp: number;
    };
    traits: { name: string; description: string }[];
    actions: { name: string; description: string }[];
    legendaryActions: { name: string; description: string }[];
    reactions: { name: string; description: string }[];
    source: string;
    page: number | null;
    isSRD: boolean;
}