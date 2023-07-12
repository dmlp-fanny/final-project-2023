import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../../Context";
import axios from 'axios';
import './Navigation.scss'
import BurgerMenu from "./BurgerMenu";

export default function Navigation() {

    const navigate = useNavigate()

    const { context: {user}, dispatch } = useContext(Context)

    const handleLogout = async () => {
        const response = await axios.post('/logout')

        dispatch({
            type: 'user/set',
            payload: null
        })

        navigate('/login')
    }
    return (
        <aside>
            <article className="profile_card">
                <div className="profile_card-img"></div>
                <div className="profile_card_name">{user.first_name} {user.last_name}</div>
                {
                    user.translator ? 'TRANSLATOR' : ''
                }
                <button className="profile_card_btn" onClick={ handleLogout }>Log Out</button>
            </article>

            <nav className="navigation">
                    <Link to="/dashboard">Homey</Link>
                    <Link to="/dashboard/requests">Requests</Link>
                    <Link to="/dashboard/profile">Profile</Link>
                    <Link to="/dashboard/messages">Messages</Link>
                    <Link to="/dashboard/settings">Settings</Link>
            </nav>
                <div className="burger-menu">
                    <BurgerMenu />
                </div>
        </aside>

        

    );
}