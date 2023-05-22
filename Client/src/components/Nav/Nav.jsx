import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css"
import { Link, NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (

        <div className={style.nav}>
            <SearchBar onSearch={onSearch} />

            <Link to="/home">
                <button>Home</button>
            </Link>

            <NavLink to="/about">
                <button>About</button>
            </NavLink>

            <NavLink to='/favorites'>
                <button>Favorites</button>
            </NavLink>
        </div>
    )
}
export default Nav;