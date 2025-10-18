import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Grimorio from './pages/Grimorio';
import Personajes from './pages/Personajes';
import Configuracion from './pages/Configuracion';
import { SystemProvider } from './context/SystemContext';

const App: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen((p) => !p);

    return (
        <SystemProvider>
            <BrowserRouter>
                <Header onDrawerToggle={toggleDrawer} />
                <Sidebar open={drawerOpen} onClose={toggleDrawer} />
                <Container sx={{ mt: 8 }}>
                    <Routes>
                        <Route path="/" element={<div>Inicio</div>} />
                        <Route path="/grimorio" element={<Grimorio />} />
                        <Route path="/personajes" element={<Personajes />} />
                        <Route path="/configuracion" element={<Configuracion />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </SystemProvider>
    );
};

export default App;
