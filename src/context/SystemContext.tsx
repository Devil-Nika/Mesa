import { createContext, useContext, useMemo, useState } from 'react';
import { getSystem, type SystemKey } from '../systems';

type Ctx = {
    systemKey: SystemKey;
    setSystemKey: (k: SystemKey) => void;
    system: ReturnType<typeof getSystem>;
};

const SystemContext = createContext<Ctx | null>(null);

// ⚠️ Fast Refresh: permitimos exportar el hook acá.
// eslint-disable-next-line react-refresh/only-export-components
export const useSystem = () => {
    const ctx = useContext(SystemContext);
    if (!ctx) throw new Error('SystemContext not found');
    return ctx;
};

export const SystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [systemKey, setSystemKey] = useState<SystemKey>('dnd5e');
    const system = useMemo(() => getSystem(systemKey), [systemKey]);

    return (
        <SystemContext.Provider value={{ systemKey, setSystemKey, system }}>
            {children}
        </SystemContext.Provider>
    );
};