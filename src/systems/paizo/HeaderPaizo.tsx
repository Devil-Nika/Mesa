import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import type { HeaderProps } from '../types';

const HeaderPaizo: React.FC<HeaderProps> = ({ onDrawerToggle, showNav = true }) => (
    <AppBar position="fixed" color="secondary">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={onDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Paizo / Pathfinder
            </Typography>
            {showNav && (
                <>
                    <Button color="inherit" component={NavLink} to="/">Inicio</Button>
                    {/* futuras herramientas específicas de Paizo */}
                </>
            )}
        </Toolbar>
    </AppBar>
);

export default HeaderPaizo;