// Contexto para alternar tema y persistir en localStorage
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import themeDark from '../theme/themeDark';
import themeLight from '../theme/themeLight';

type Mode = 'dark' | 'light';

interface ThemeModeCtx {
    mode: Mode;
    toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeCtx>({ mode: 'dark', toggleTheme: () => {} });

// ⚠️ Fast Refresh se queja si exportamos algo que no es componente.
// Permitimos exportar el hook desde este archivo:
// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<Mode>('dark');

    useEffect(() => {
        const saved = (localStorage.getItem('themeMode') as Mode) || 'dark';
        setMode(saved);
    }, []);

    const toggleTheme = useCallback(() => {
        setMode((prev) => {
            const next = prev === 'dark' ? 'light' : 'dark';
            localStorage.setItem('themeMode', next);
            return next;
        });
    }, []);

    const theme = useMemo(() => (mode === 'dark' ? themeDark : themeLight), [mode]);

    return (
        <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};