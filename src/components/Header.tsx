import type { HeaderProps } from '../systems/types';
import { useSystem } from '../context/SystemContext';

const Header: React.FC<HeaderProps> = (props) => {
    const { system } = useSystem();
    const ActiveHeader = system.Header;
    return <ActiveHeader {...props} />;
};

export default Header;