// Componente principal con rutas y estructura
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Grimorio from './pages/Grimorio';

const App: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen((prev) => !prev);

    const version = '0.0.1';
    const gm = 'Devil‑Nika';

    return (
        <BrowserRouter>
            <Header onDrawerToggle={toggleDrawer} />
            <Sidebar open={drawerOpen} onClose={toggleDrawer} />
            <Container sx={{ mt: 2 }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <h1>Mesa de Juego</h1>
                                <p>Bienvenido a tu asistente de dirección de rol.</p>
                                <p>Versión actual: {version}</p>
                                <footer>
                                    <p>Desarrollado por: {gm}</p>
                                </footer>
                            </>
                        }
                    />
                    <Route path="/grimorio" element={<Grimorio />} />
                    <Route path="/personajes" element={<div>Personajes (en construcción)</div>} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;