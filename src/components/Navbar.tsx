import "../styles/navbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { authState, logoutUser } = useContext(AuthContext);
    return (
        <div className="nav_container">
            <div className='navbar'>
                {authState.isAuth ?
                    <h2 className="navlink" onClick={() => logoutUser()}>Logout</h2>
                    : <>
                        <h2><Link to="/" className="navlink">Login</Link></h2>
                        <h2><Link to="/home" className="navlink">Home</Link></h2>
                    </>
                }

            </div>
        </div>
    )
}

export default Navbar
