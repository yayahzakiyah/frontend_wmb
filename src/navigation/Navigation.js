import { Link, NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../shared/hook/UseAuth";
import '../navigation/AppNavigation.css';

export const Navigation = () => {
    const {onLogout} = useAuth();

    return (
        <>
        <div className="navigation-container">
            <div className="navigation-sidebar">
                <li>
                    <a>
                    <i className="fa fa-home"></i>
                         <strong>WMB</strong>
                         <br/>
                         <small>Version 1.2</small>
                    </a>
                </li>
                <br/>
                <li>
                    <a>
                        <i className="fa fa-home"></i>
                        <Link to='/main/menu'>Menu</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-home"></i>
                        <Link to='/main/table'>Table</Link>
                    </a>
                </li>
                <button className="navigation-logout" onClick={onLogout}>Logout</button>
            </div>
            <Outlet/>
        </div>
        
        </>
    )
}