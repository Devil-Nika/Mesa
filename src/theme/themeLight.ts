// Tema claro
import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#673ab7' },
        secondary: { main: '#f57c00' },
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
    },
});

export default themeLight;
