import { NavLink } from "react-router-dom";

const NavLinks = ({ item }) => {
    return (
        <>
            <NavLink
                to={item.link}
                data-link-alt={item.name}
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                <span>{item.name}</span>
            </NavLink>
        </>
    );
};

export default NavLinks;
