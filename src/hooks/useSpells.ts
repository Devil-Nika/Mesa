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
                        // ⚙️ Filtrar datos SRD si el usuario eligió ocultarlos
                        const hideSRD = localStorage.getItem('hideSRD') === 'true';
                        const visible = hideSRD ? data.filter((s) => !s.isSRD) : data;

                        setSpells(visible);
                        setLoading(false);
                    })
                    .catch(() => setLoading(false)),
            );
    }, []);

    return { spells, loading };
};

export default useSpells;