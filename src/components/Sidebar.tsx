// Sidebar angosto; icono ocupa todo el ancho del botón
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import { useSystem } from '../context/SystemContext';
import { systems, type SystemKey } from '../systems';
import ThemedIcon from './ThemedIcon';

type Props = { open: boolean; onClose: () => void };

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
    const { systemKey, setSystemKey } = useSystem();
    const selectSystem = (key: SystemKey) => { setSystemKey(key); onClose(); };

    return (
        <Drawer open={open} onClose={onClose}>
            <Box sx={{ width: 180, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <List subheader={<ListSubheader>Sistemas</ListSubheader>} sx={{ pb: 0 }}>
                    {systems.map(sys => (
                        <ListItemButton
                            key={sys.key}
                            selected={systemKey === sys.key}
                            onClick={() => selectSystem(sys.key)}
                            sx={{
                                borderRadius: 1, mx: 1, my: 0.5, py: 1.25,
                                '&.Mui-selected': { bgcolor: 'action.selected' },
                                '&:hover': { bgcolor: 'action.hover', transform: 'translateY(-1px)' },
                                transition: 'all .15s ease',
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                {/* ocupa ancho completo del botón */}
                                <ThemedIcon src={sys.iconWithName} alt={sys.name} fullWidth />
                            </Box>
                        </ListItemButton>
                    ))}
                </List>
                <Divider sx={{ my: 1 }} />
            </Box>
        </Drawer>
    );
};

export default Sidebar;
