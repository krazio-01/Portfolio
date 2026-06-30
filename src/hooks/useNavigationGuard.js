import { useLocation } from 'react-router-dom';

export const useNavigationGuard = (targetPath) => {
    const location = useLocation();

    const handleGuard = (e) => {
        if (location.pathname === targetPath) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return true;
        }

        return false;
    };

    return handleGuard;
};
