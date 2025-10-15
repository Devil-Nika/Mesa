export interface Spell {
    id: string;
    name: string;
    level: string;
    school: string;
    casting_time: string;
    range: string;
    components: string;
    duration: string;
    description: string;
    higher_level?: string;
    classes: string[];
}