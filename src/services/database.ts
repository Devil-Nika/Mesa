import Dexie, { type Table } from 'dexie';
import spellsData from '../data/spells.json';
import type { Spell } from '../types/Spell';
import type { Character } from '../types/Character';

class MesaDatabase extends Dexie {
    spells!: Table<Spell, string>;
    characters!: Table<Character, number>;

    constructor() {
        super('MesaDatabase');
        this.version(1).stores({
            spells: '&id, name, level, school, casting_time',
            characters: '++id, name',
        });

        this.spells = this.table('spells');
        this.characters = this.table('characters');
    }
}

export const database = new MesaDatabase();

const seedSpellsData = spellsData as Spell[];

async function seedSpells() {
    await database.transaction('rw', database.spells, async () => {
        const currentCount = await database.spells.count();
        if (currentCount > 0) return;
        await database.spells.bulkPut(seedSpellsData);
    });
}

async function seedCharacters() {
    await database.transaction('rw', database.characters, async () => {
        const count = await database.characters.count();
        if (count > 0) return;
        // Crea un personaje de prueba con lista vacía de conjuros preparados
        const testCharacter: Character = {
            id: 1,
            name: 'Personaje de Prueba',
            preparedSpells: [],
        };
        await database.characters.put(testCharacter);
    });
}

export async function initializeDatabase(): Promise<MesaDatabase> {
    if (!database.isOpen()) {
        await database.open();
    }
    await seedSpells();
    await seedCharacters();
    return database;
}
