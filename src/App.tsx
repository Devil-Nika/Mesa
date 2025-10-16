import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Grimorio from './pages/Grimorio';
import Personajes from './pages/Personajes';

const App: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedSystem, setSelectedSystem] = useState('dnd5e');
    const toggleDrawer = () => setDrawerOpen((prev) => !prev);

    return (
        <BrowserRouter>
            <Header onDrawerToggle={toggleDrawer} />
            <Sidebar
                open={drawerOpen}
                onClose={toggleDrawer}
                selectedSystem={selectedSystem}
                onSelectSystem={setSelectedSystem}
            />
            <Container sx={{ mt: 8 }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <h1>Mesa de Juego</h1>
                                <p>Bienvenido a tu asistente de dirección de rol.</p>
                            </>
                        }
                    />
                    <Route path="/grimorio" element={<Grimorio />} />
                    <Route path="/personajes" element={<Personajes />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;