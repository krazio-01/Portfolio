import { NavLink, useNavigate } from 'react-router-dom';
import { useNavigationGuard } from '../../hooks/useNavigationGuard';

const NavLinks = ({ item, fromSidebar }) => {
    const handleGuard = useNavigationGuard(item.link);
    const navigate = useNavigate();

    const handleClick = (e) => {
        const wasBlocked = handleGuard(e);
        if (wasBlocked) return;

        if (fromSidebar) {
            e.preventDefault();
            document.body.style.pointerEvents = 'none';

            setTimeout(() => {
                navigate(item.link);
            }, 700);
            return;
        }
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
