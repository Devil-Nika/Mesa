import Dexie, { type Table } from 'dexie'

import spellsData from '../data/spells.json'
import type { Spell } from '../types/Spell'

class MesaDatabase extends Dexie {
    spells!: Table<Spell, string>

    constructor() {
        super('MesaDatabase')
        this.version(1).stores({
            spells: '&id, name, level, school, casting_time',
        })

        this.spells = this.table('spells')
    }
}

export const database = new MesaDatabase()

const seedSpellsData = spellsData as Spell[]

async function seedSpells() {
    await database.transaction('rw', database.spells, async () => {
        const currentCount = await database.spells.count()

        if (currentCount > 0) {
            return
        }

        await database.spells.bulkPut(seedSpellsData)
    })
}

export async function initializeDatabase(): Promise<MesaDatabase> {
    if (!database.isOpen()) {
        await database.open()
    }

    await seedSpells()

    return database
}