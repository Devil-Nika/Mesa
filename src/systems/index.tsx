// Registro de sistemas con iconos (símbolo) e iconos con nombre (para Sidebar)
import type { HeaderProps } from './types';
import HeaderDnd from './dnd/HeaderDnd';
import HeaderPaizo from './paizo/HeaderPaizo';

// D&D
import DndIcon from '../assets/icons/Icono Dungeons & Dragons.png';
import DndIconNombre from '../assets/icons/Icono Dungeons & Dragons con nombre.png';
// Paizo
import PaizoIcon from '../assets/icons/Icono Paizo.png';
import PaizoIconNombre from '../assets/icons/Icono Paizo con Nombre.png';

export type SystemKey = 'dnd5e' | 'paizo';

export type SystemDef = {
    key: SystemKey;
    name: string;
    icon: string;          // símbolo (Header + Inicio)
    iconWithName: string;  // imagen con nombre (Sidebar)
    Header: React.FC<HeaderProps>;
};

const systemsList: SystemDef[] = [
    { key: 'dnd5e', name: 'Dungeons & Dragons', icon: DndIcon, iconWithName: DndIconNombre, Header: HeaderDnd },
    { key: 'paizo', name: 'Pathfinder', icon: PaizoIcon, iconWithName: PaizoIconNombre, Header: HeaderPaizo },
];

export const getSystem = (key: SystemKey) => systemsList.find(s => s.key === key) ?? systemsList[0];
export const systems = systemsList;
