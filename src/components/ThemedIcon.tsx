// Soporta tamaño fijo o llenar ancho del contenedor (fullWidth)
import { useTheme } from '@mui/material/styles';

type Props = {
    src: string;
    alt: string;
    size?: number;           // px (opcional)
    fullWidth?: boolean;     // ocupa el 100% del ancho disponible
    style?: React.CSSProperties;
};

const ThemedIcon: React.FC<Props> = ({ src, alt, size = 28, fullWidth, style }) => {
    const { palette } = useTheme();
    const isDark = palette.mode === 'dark';
    const filter = isDark ? 'invert(1) brightness(1.2)' : 'invert(0)';

    const base: React.CSSProperties = fullWidth
        ? { width: '100%', height: 'auto' }
        : { width: size, height: size };

    return (
        <img
            src={src}
            alt={alt}
            style={{ display: 'block', filter, ...base, ...style }}
        />
    );
};

export default ThemedIcon;
