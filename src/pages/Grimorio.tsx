// Página que lista conjuros y permite ver detalles
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import SpellModal from '../components/SpellModal';
import useSpells from '../hooks/useSpells';
import type { Spell } from '../types/Spell';

const Grimorio: React.FC = () => {
    const { spells, loading } = useSpells();
    const [search, setSearch] = useState('');
    const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

    const filteredSpells = spells.filter((spell) =>
        spell.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (loading) return <CircularProgress />;

    return (
        <div>
            <TextField
                label="Buscar conjuro"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
                margin="normal"
            />
            <List>
                {filteredSpells.map((spell) => (
                    <ListItemButton key={spell.id} onClick={() => setSelectedSpell(spell)}>
                        <ListItemText primary={spell.name} secondary={`Nivel ${spell.level}`} />
                    </ListItemButton>
                ))}
            </List>
            <SpellModal
                spell={selectedSpell}
                open={Boolean(selectedSpell)}
                onClose={() => setSelectedSpell(null)}
            />
        </div>
    );
};

export default Grimorio;
