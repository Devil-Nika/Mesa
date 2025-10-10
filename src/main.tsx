import React from 'react' // <-- ¡ESTA LÍNEA ES CRUCIAL!
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // <-- Asegúrate de que esto también esté aquí.

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
