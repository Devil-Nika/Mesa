// Página de opciones: tema, SRD on/off y placeholders
import { Box, Typography, Button, Stack, Paper, Divider } from '@mui/material';
import { useThemeMode } from '../context/ThemeModeContext';
import { useEffect, useState } from 'react';
import ThemedIcon from '../components/ThemedIcon';
import OpcionesIcon from '../assets/icons/Icono Opciones.png';

const Configuracion: React.FC = () => {
    const { mode, toggleTheme } = useThemeMode();
    const [hideSRD, setHideSRD] = useState(false);

    useEffect(() => {
        setHideSRD(localStorage.getItem('hideSRD') === 'true');
    }, []);

    const toggleSRD = () => {
        const v = !hideSRD;
        setHideSRD(v);
        localStorage.setItem('hideSRD', String(v));
    };

    return (
        <Box>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <Box sx={{ width: 56 }}>
                    <ThemedIcon src={OpcionesIcon} alt="Opciones" fullWidth />
                </Box>
                <Typography variant="h4">Configuración</Typography>
            </Stack>

            <Paper sx={{ p: 2, mb: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                    <Typography>Tema actual: <b>{mode === 'dark' ? 'Oscuro' : 'Claro'}</b></Typography>
                    <Button variant="contained" onClick={toggleTheme}>
                        Cambiar a {mode === 'dark' ? 'Claro' : 'Oscuro'}
                    </Button>
                </Stack>
            </Paper>

            <Paper sx={{ p: 2, mb: 2 }}>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                    <Typography>Mostrar datos del SRD 5.2+ (no afecta datos de usuario)</Typography>
                    <Button
                        variant={hideSRD ? 'outlined' : 'contained'}
                        color={hideSRD ? 'error' : 'success'}
                        onClick={toggleSRD}
                    >
                        {hideSRD ? 'Desactivado' : 'Activado'}
                    </Button>
                </Stack>
            </Paper>

            <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>Herramientas</Typography>
                <Divider sx={{ mb: 2 }} />
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    <Button variant="outlined" disabled>Importar (Próximamente)</Button>
                    <Button variant="outlined" disabled>Exportar (Próximamente)</Button>
                    <Button variant="outlined" disabled>Restaurar (Próximamente)</Button>
                    <Button variant="outlined" disabled>Copia de seguridad (Próximamente)</Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default Configuracion;