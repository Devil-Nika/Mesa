// Hook para leer conjuros desde IndexedDB
import { useEffect, useState } from 'react';
import { database } from '../services/database';
import type { Spell } from '../types/Spell';

const useSpells = () => {
    const [spells, setSpells] = useState<Spell[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        database
            .open()
            .then(() =>
                database.spells
                    .toArray()
                    .then((data: Spell[]) => {
                        setSpells(data);
                        setLoading(false);
                    })
                    .catch(() => setLoading(false)),
            );
    }, []);

    return { spells, loading };
};

export default useSpells;