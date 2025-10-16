import Dexie, { type Table } from 'dexie'

import spells from '../data/spells.json'
import type { Spell } from '../types/Spell'

class MesaDatabase extends Dexie {
    spells!: Table<Spell, string>

    constructor() {
        super('MesaDatabase')
        this.version(1).stores({
            spells: '&id, name, level, school, casting_time',
        })
    }
}

export const database = new MesaDatabase()

async function seedSpells() {
    const currentCount = await database.spells.count()

    if (currentCount > 0) {
        return
    }

    await database.spells.bulkPut(spells as Spell[])
}

export async function initializeDatabase() {
    if (!database.isOpen()) {
        await database.open()
    }

    await seedSpells()

    return database
}