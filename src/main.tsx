import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import App from './App.tsx'
import { initializeDatabase } from './services/database'
import theme from './theme/theme'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('Failed to find the root element')
}

initializeDatabase().catch((error) => {
    console.error('Failed to initialize the database', error)
})

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>
);