import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../Context";
import axios from "axios";
import "./Navigation.scss";
import BurgerMenu from "./BurgerMenu";

export default function Navigation() {
    const navigate = useNavigate();

    const {
        context: { user },
        dispatch,
    } = useContext(Context);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = async () => {
        const response = await axios.post("/logout");

        dispatch({
            type: "user/set",
            payload: null,
        });

        navigate("/login");
    };
    return (
        <>
            <div className="topBar">
                <div className="burger-menu" onClick={toggleMenu}>
                    <BurgerMenu />
                </div>
            </div>
            <aside className={isMenuOpen ? "display" : ""}>
                <article className="profile_card">
                    <div className="profile_card-img"></div>
                    <div className="profile_card_name">
                        {user.first_name} {user.last_name}
                    </div>
                    {user.translator ? "TRANSLATOR" : ""}
                    <button className="profile_card_btn" onClick={handleLogout}>
                        Log Out
                    </button>
                </article>

                <nav className="navigation">
                    <Link to="/dashboard" onClick={toggleMenu}>Home</Link>
                    <Link to="/dashboard/requests" onClick={toggleMenu}>Requests</Link>
                    <Link to="/dashboard/profile" onClick={toggleMenu}>Profile</Link>
                    <Link to="/dashboard/messages" onClick={toggleMenu}>Messages</Link>
                    <Link to="/dashboard/settings" onClick={toggleMenu}>Settings</Link>
                </nav>
            </aside>
        </>
    );
}
