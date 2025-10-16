// Hook para gestionar un personaje y sus conjuros preparados
import { useEffect, useState } from 'react';
import { database } from '../services/database';
import type { Character } from '../types/Character';
import type { Spell } from '../types/Spell';

const useCharacter = (characterId = 1) => {
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            await database.open();
            const char = await database.characters.get(characterId);
            setCharacter(char ?? null);
        };
        fetchCharacter();
    }, [characterId]);

    const togglePrepareSpell = async (spell: Spell) => {
        if (!character) return;
        const exists = character.preparedSpells.some((s) => s.id === spell.id);
        const newPrepared = exists
            ? character.preparedSpells.filter((s) => s.id !== spell.id)
            : [...character.preparedSpells, spell];
        const updated = { ...character, preparedSpells: newPrepared };
        await database.characters.put(updated);
        setCharacter(updated);
    };

    return { character, togglePrepareSpell };
};

export default useCharacter;
