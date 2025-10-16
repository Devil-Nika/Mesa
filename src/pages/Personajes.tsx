// Página de personajes: muestra el personaje de prueba y sus conjuros preparados
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useCharacter from '../hooks/useCharacter';

const Personajes: React.FC = () => {
    const { character, togglePrepareSpell } = useCharacter(1);

    if (!character) {
        return <p>Cargando personaje…</p>;
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {character.name}
            </Typography>
            <Typography variant="h6">Conjuros preparados</Typography>
            {character.preparedSpells.length === 0 ? (
                <p>No hay conjuros preparados.</p>
            ) : (
                <List>
                    {character.preparedSpells.map((spell) => (
                        <ListItem key={spell.id} secondaryAction={
                            <Button onClick={() => togglePrepareSpell(spell)}>
                                Quitar
                            </Button>
                        }>
                            <ListItemText
                                primary={spell.name}
                                secondary={`Nivel ${spell.level} – ${spell.school}`}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Personajes;
