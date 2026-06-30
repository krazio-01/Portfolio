import { NavLink } from 'react-router-dom';
import { useNavigationGuard } from '../../hooks/useNavigationGuard';

const NavLinks = ({ item, onClick }) => {
    const handleGuard = useNavigationGuard(item.link);

    const handleClick = (e) => {
        const wasBlocked = handleGuard(e);
        if (!wasBlocked && onClick) onClick(e);
    };

    return (
        <NavLink
            to={item.link}
            onClick={handleClick}
            data-link-alt={item.name}
            className={({ isActive }) => (isActive ? 'active' : '')}
        >
            <span>{item.name}</span>
        </NavLink>
    );
};

export default NavLinks;
