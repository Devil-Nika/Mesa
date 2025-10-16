// Barra superior fija con navegación
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    onDrawerToggle: () => void;
    showNav?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onDrawerToggle, showNav = true }) => (
    // No sobrescribes zIndex o lo estableces a zIndex.appBar para que el Drawer quede encima
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.appBar }}>
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={onDrawerToggle}
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Dungeons & Dragons
            </Typography>
            {showNav && (
                <>
                    <Button color="inherit" component={NavLink} to="/">Inicio</Button>
                    <Button color="inherit" component={NavLink} to="/grimorio">Conjuros</Button>
                    <Button color="inherit" component={NavLink} to="/personajes">Personajes</Button>
                </>
            )}
        </Toolbar>
    </AppBar>
);

export default Header;