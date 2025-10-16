// Modal de detalle para un conjuro
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import type { Spell } from '../types/Spell';

interface SpellModalProps {
    spell: Spell | null;
    open: boolean;
    onClose: () => void;
}

const SpellModal: React.FC<SpellModalProps> = ({ spell, open, onClose }) => (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        {spell && (
            <>
                <DialogTitle>{spell.name}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText component="div">
                        <p><strong>Nivel:</strong> {spell.level}</p>
                        <p><strong>Escuela:</strong> {spell.school}</p>
                        <p><strong>Tiempo de lanzamiento:</strong> {spell.casting_time}</p>
                        <p><strong>Alcance:</strong> {spell.range}</p>
                        <p><strong>Componentes:</strong> {spell.components}</p>
                        <p><strong>Duración:</strong> {spell.duration}</p>
                        <p><strong>Descripción:</strong> {spell.description}</p>
                        {spell.higher_level && (
                            <p><strong>A mayor nivel:</strong> {spell.higher_level}</p>
                        )}
                        <p><strong>Clases:</strong> {spell.classes.join(', ')}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cerrar</Button>
                </DialogActions>
            </>
        )}
    </Dialog>
);

export default SpellModal;
