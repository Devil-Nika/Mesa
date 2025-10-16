// Sidebar con enlaces de navegación
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    return (
        <Drawer open={open} onClose={onClose}>
            <List sx={{ width: 250 }}>
                <ListItemButton component={NavLink} to="/" onClick={onClose}>
                    <ListItemText primary="Inicio" />
                </ListItemButton>
                <ListItemButton component={NavLink} to="/grimorio" onClick={onClose}>
                    <ListItemText primary="Grimorio" />
                </ListItemButton>
                <ListItemButton component={NavLink} to="/personajes" onClick={onClose}>
                    <ListItemText primary="Personajes" />
                </ListItemButton>
            </List>
        </Drawer>
    );
};

export default Sidebar;
