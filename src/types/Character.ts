import type { Spell } from './Spell';

export interface Character{
    id: number;
    name: string;
    preparedSpells: Spell[];
}