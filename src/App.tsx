// Componente principal con header y sidebar
import { useState } from 'react';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen((prev) => !prev);

    const version = '0.0.1';
    const gm = 'Devil‑Nika';

    return (
        <>
            <Header onDrawerToggle={toggleDrawer} />
            <Sidebar open={drawerOpen} onClose={toggleDrawer} />
            <Container sx={{ mt: 2 }}>
                <h1>Mesa de Juego</h1>
                <p>Bienvenido a tu asistente de dirección de rol.</p>
                <p>Versión actual: {version}</p>
                <footer>
                    <p>Desarrollado por: {gm}</p>
                </footer>
            </Container>
        </>
    );
}

export default App;
