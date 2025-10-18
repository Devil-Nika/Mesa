import { useMemo, useState } from 'react';
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Chip,
    Divider,
    List,
    ListSubheader,
    ListItemButton,
    ListItemText,
    ToggleButton,
    ToggleButtonGroup,
    CircularProgress,
    Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import SpellModal from '../components/SpellModal';
import useSpells from '../hooks/useSpells';
import type { Spell } from '../types/Spell';

// Helpers ---------------------------------------------------------------------
const hasComponent = (spell: Spell, flag: 'V' | 'S' | 'M') =>
    spell.components.toUpperCase().includes(flag);

const passesComponentFilters = (
    spell: Spell,
    comps: { V: boolean; S: boolean; M: boolean; R: boolean }
) => {
    if (comps.V && !hasComponent(spell, 'V')) return false;
    if (comps.S && !hasComponent(spell, 'S')) return false;
    if (comps.M && !hasComponent(spell, 'M')) return false;
    if (comps.R && !spell.ritual) return false;
    return true;
};

type SortKey = 'name' | 'school';

const Grimorio: React.FC = () => {
    const { spells, loading } = useSpells();

    // Estado UI ------------------------------------------------------------------
    const [search, setSearch] = useState('');
    const [selectedClass, setSelectedClass] = useState<string>('');
    const [componentsFilter, setComponentsFilter] = useState({
        V: false,
        S: false,
        M: false,
        R: false,
    });
    const [sortBy, setSortBy] = useState<SortKey>('name');
    const [selectedSpell, setSelectedSpell] = useState<Spell | null>(null);

    // Opciones derivadas ---------------------------------------------------------
    const availableClasses = useMemo(
        () => Array.from(new Set(spells.flatMap((s) => s.classes))).sort(),
        [spells]
    );

    // Filtrado + orden + agrupado ------------------------------------------------
    const grouped = useMemo(() => {
        const q = search.trim().toLowerCase();

        const filtered = spells.filter((s) => {
            const matchesText =
                !q ||
                s.name.toLowerCase().includes(q) ||
                s.description.toLowerCase().includes(q) ||
                s.school.toLowerCase().includes(q);

            const matchesClass = !selectedClass || s.classes.includes(selectedClass);
            const matchesComponents = passesComponentFilters(s, componentsFilter);

            return matchesText && matchesClass && matchesComponents;
        });

        const sorter =
            sortBy === 'name'
                ? (a: Spell, b: Spell) => a.name.localeCompare(b.name, 'es')
                : (a: Spell, b: Spell) => a.school.localeCompare(b.school, 'es');

        const map = new Map<number, Spell[]>();
        filtered.forEach((s) => {
            const arr = map.get(s.level) ?? [];
            arr.push(s);
            map.set(s.level, arr);
        });

        const levels = Array.from(map.keys()).sort((a, b) => a - b);
        return levels.map((lvl) => ({
            level: lvl,
            spells: (map.get(lvl) ?? []).sort(sorter),
        }));
    }, [spells, search, selectedClass, componentsFilter, sortBy]);

    // Handlers -------------------------------------------------------------------
    const onChangeClass = (e: SelectChangeEvent<string>) => {
        setSelectedClass(e.target.value);
    };

    const onToggleComp = (key: 'V' | 'S' | 'M' | 'R') => {
        setComponentsFilter((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const onChangeSort = (_: unknown, value: SortKey | null) => {
        if (value) setSortBy(value);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'grid', placeItems: 'center', minHeight: '40vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ display: 'grid', gap: 2 }}>
            {/* Búsqueda */}
            <TextField
                label="Buscar conjuro"
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
            />

            {/* Filtros y orden: layout estable (altura mínima + columnas fijas) */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 220px 1fr auto' },
                    gap: 2,
                    alignItems: 'center',
                    minHeight: 88,
                }}
            >
                {/* Clase */}
                <FormControl sx={{ minWidth: 220 }}>
                    <InputLabel>Clase</InputLabel>
                    <Select label="Clase" value={selectedClass} onChange={onChangeClass}>
                        <MenuItem value="">Todas</MenuItem>
                        {availableClasses.map((c) => (
                            <MenuItem key={c} value={c}>
                                {c}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Componentes */}
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={componentsFilter.V}
                                onChange={() => onToggleComp('V')}
                            />
                        }
                        label={<Chip size="small" label="V" />}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={componentsFilter.S}
                                onChange={() => onToggleComp('S')}
                            />
                        }
                        label={<Chip size="small" label="S" />}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={componentsFilter.M}
                                onChange={() => onToggleComp('M')}
                            />
                        }
                        label={<Chip size="small" label="M" />}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={componentsFilter.R}
                                onChange={() => onToggleComp('R')}
                            />
                        }
                        label={<Chip size="small" label="Ritual" />}
                    />
                </FormGroup>

                {/* Orden */}
                <Box sx={{ ml: { xs: 0, sm: 'auto' } }}>
                    <ToggleButtonGroup
                        size="small"
                        color="primary"
                        value={sortBy}
                        exclusive
                        onChange={onChangeSort}
                        aria-label="ordenar por"
                    >
                        <ToggleButton value="name" aria-label="ordenar por nombre">
                            Nombre
                        </ToggleButton>
                        <ToggleButton value="school" aria-label="ordenar por escuela">
                            Escuela
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>

            <Divider />

            {/* Lista agrupada por nivel */}
            {grouped.length === 0 ? (
                <Typography variant="body1" color="text.secondary">
                    No se encontraron conjuros con los filtros actuales.
                </Typography>
            ) : (
                <List sx={{ width: '100%', bgcolor: 'transparent' }} subheader={<li />}>
                    {grouped.map(({ level, spells: group }) => (
                        <li key={level}>
                            <ul style={{ padding: 0, margin: 0 }}>
                                <ListSubheader
                                    sx={{
                                        bgcolor: 'background.paper',
                                        borderRadius: 1,
                                        mt: 2,
                                        mb: 1,
                                    }}
                                >
                                    {level === 0 ? 'Trucos (Nivel 0)' : `Nivel ${level}`}
                                    <Typography
                                        component="span"
                                        sx={{ ml: 1 }}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        • {group.length} conjuros
                                    </Typography>
                                </ListSubheader>

                                {group.map((spell) => (
                                    <ListItemButton
                                        key={spell.id}
                                        onClick={() => setSelectedSpell(spell)}
                                    >
                                        <ListItemText
                                            primary={spell.name}
                                            secondary={`${spell.school} • ${spell.casting_time} • ${spell.range} • ${spell.components}${spell.ritual ? ' • Ritual' : ''}`}
                                        />
                                    </ListItemButton>
                                ))}
                            </ul>
                        </li>
                    ))}
                </List>
            )}

            {/* Modal de detalle */}
            <SpellModal
                spell={selectedSpell}
                open={Boolean(selectedSpell)}
                onClose={() => setSelectedSpell(null)}
            />
        </Box>
    );
};

export default Grimorio;
