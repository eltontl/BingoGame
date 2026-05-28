import { NavLink } from "react-router";

import "./styles.css";

const Menu = () => {
  return (
    <header className="menu">
      <div className="menu__container">
        <div className="menu__logo">
          Bingo Game
        </div>

        <nav className="menu__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "menu__link menu__link--active"
                : "menu__link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/control"
            className={({ isActive }) =>
              isActive
                ? "menu__link menu__link--active"
                : "menu__link"
            }
          >
            Controle
          </NavLink>

          <NavLink
            to="/panel"
            className={({ isActive }) =>
              isActive
                ? "menu__link menu__link--active"
                : "menu__link"
            }
          >
            Painel
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Menu;