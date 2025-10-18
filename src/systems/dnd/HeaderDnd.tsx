import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import type { HeaderProps } from '../types';
import ThemedIcon from '../../components/ThemedIcon';

// ICONOS
import DndIcon from '../../assets/icons/Icono Dungeons & Dragons.png';
import GrimorioIcon from '../../assets/icons/Icono Grimorio.png';
import PersonajeIcon from '../../assets/icons/Icono Personaje.png';
import ConfigIcon from '../../assets/icons/Icono Dungeons & Dragons con nombre.png'; // o cualquier icono de ajustes

const hoverBtn = {
    borderRadius: 1,
    px: 1.25,
    '&:hover': { bgcolor: 'action.hover', transform: 'translateY(-1px)', boxShadow: 2 },
    transition: 'all .15s ease',
};

const HeaderDnd: React.FC<HeaderProps> = ({ onDrawerToggle, showNav = true }) => {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{ gap: 1 }}>
                {/* Menú hamburguesa (opcional) */}
                {onDrawerToggle && (
                    <IconButton color="inherit" onClick={onDrawerToggle} sx={{ p: 0.75 }}>
                        <span style={{ width: 18, height: 18, display: 'inline-block' }}>≡</span>
                    </IconButton>
                )}

                {/* Inicio */}
                <IconButton
                    color="inherit"
                    component={NavLink}
                    to="/"
                    sx={{ ...hoverBtn, p: 0.75 }}
                    aria-label="Inicio"
                >
                    <ThemedIcon src={DndIcon} alt="Inicio D&D" size={32} />
                </IconButton>

                {showNav && (
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Button
                            color="inherit"
                            component={NavLink}
                            to="/grimorio"
                            sx={hoverBtn}
                            startIcon={<ThemedIcon src={GrimorioIcon} alt="Conjuros" size={22} />}
                        >
                            Conjuros
                        </Button>

                        <Button
                            color="inherit"
                            component={NavLink}
                            to="/personajes"
                            sx={hoverBtn}
                            startIcon={<ThemedIcon src={PersonajeIcon} alt="Personajes" size={22} />}
                        >
                            Personajes
                        </Button>

                        {/* ✅ Ahora navega a la página Configuración */}
                        <Button
                            color="inherit"
                            component={NavLink}
                            to="/configuracion"
                            sx={hoverBtn}
                            startIcon={<ThemedIcon src={ConfigIcon} alt="Opciones" size={22} />}
                        >
                            Opciones
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default HeaderDnd;
