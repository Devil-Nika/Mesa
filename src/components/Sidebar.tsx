// Selección de sistema de juego en el Drawer
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface SidebarProps {
    open: boolean;
    onClose: () => void;
    selectedSystem: string;
    onSelectSystem: (system: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             open,
                                             onClose,
                                             selectedSystem,
                                             onSelectSystem,
                                         }) => {
    const systems = [{ key: 'dnd5e', name: 'Dungeons & Dragons' }];
    return (
        <Drawer open={open} onClose={onClose}>
            <List sx={{ width: 250 }}>
                {systems.map((sys) => (
                    <ListItemButton
                        key={sys.key}
                        selected={selectedSystem === sys.key}
                        onClick={() => {
                            onSelectSystem(sys.key);
                            onClose();
                        }}
                    >
                        <ListItemText primary={sys.name} />
                    </ListItemButton>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
