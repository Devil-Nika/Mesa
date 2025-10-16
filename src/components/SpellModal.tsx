// src/components/SpellModal.tsx
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import type { Spell } from '../types/Spell';
import useCharacter from '../hooks/useCharacter';


interface SpellModalProps {
    spell: Spell | null;
    open: boolean;
    onClose: () => void;
}

const SpellModal: React.FC<SpellModalProps> = ({ spell, open, onClose }) => {
    const { character, togglePrepareSpell } = useCharacter(1);
    const isPrepared =
        spell && character
            ? character.preparedSpells.some((s) => s.id === spell.id)
            : false;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            {spell && (
                <>
                    <DialogTitle>{spell.name}</DialogTitle>
                    <DialogContent dividers>
                        {/* … campos de descripción … */}
                    </DialogContent>
                    <DialogActions>
                        {/* Botón para preparar o quitar el conjuro */}
                        <Button
                            onClick={() => {
                                if (spell) togglePrepareSpell(spell);
                            }}
                        >
                            {isPrepared ? 'Quitar conjuro' : 'Preparar conjuro'}
                        </Button>
                        <Button onClick={onClose}>Cerrar</Button>
                    </DialogActions>
                </>
            )}
        </Dialog>
    );
};

export default SpellModal;
