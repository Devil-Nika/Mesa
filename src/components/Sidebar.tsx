// Sidebar de navegación con enlaces a secciones
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const items = [
        { text: 'Grimorio' },
        { text: 'Personajes' },
    ];

    return (
        <Drawer open={open} onClose={onClose}>
            <List sx={{ width: 250 }}>
                {items.map((item) => (
                    <ListItemButton key={item.text}>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
