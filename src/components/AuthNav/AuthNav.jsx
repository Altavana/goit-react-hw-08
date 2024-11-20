import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const linkCol = ({ isActive }) => clsx(css.link, isActive && css.active);

const AuthNav = () => {
  return (
    <div>
      <NavLink className={linkCol} to="/register">
        Sign up
      </NavLink>
      <NavLink className={linkCol} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
export default AuthNav;
