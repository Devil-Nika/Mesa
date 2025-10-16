import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#7c4dff' },
        secondary: { main: '#ff9100' },
        background: {
            default: '#0f0f10',
            paper: '#17171a',
        },
    },
    typography: {
        fontFamily: [
            '"Roboto"',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: { fontSize: '2.5rem', fontWeight: 600 },
        h2: { fontSize: '2rem', fontWeight: 500 },
        body1: { fontSize: '1rem', lineHeight: 1.6 },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                },
            },
        },
    },
})
