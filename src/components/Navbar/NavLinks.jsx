import { NavLink, useNavigate } from 'react-router-dom';
import { useNavigationGuard } from '../../hooks/useNavigationGuard';

const NavLinks = ({ item, onClick, fromSidebar }) => {
    const handleGuard = useNavigationGuard(item.link);
    const navigate = useNavigate();

    const handleClick = (e) => {
        const wasBlocked = handleGuard(e);
        if (wasBlocked) return;

        if (fromSidebar) {
            e.preventDefault();
            if (onClick) onClick(e);

            setTimeout(() => {
                navigate(item.link);
            }, 700);
            return;
        }

        if (onClick) onClick(e);
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
