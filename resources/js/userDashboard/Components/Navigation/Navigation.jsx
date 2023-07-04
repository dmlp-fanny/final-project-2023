import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context";
import axios from 'axios';

export default function Navigation() {

    const { dispatch } = useContext(Context)

    const handleLogout = async () => {
        const response = await axios.post('/logout')

        dispatch({
            type: 'user/set',
            payload: null
        })
    }
    return (
        <aside>
            <article className="profile_card">
                <img src="" alt="" />
                <div className="profile_card_name">Name Surname</div>
                <button className="profile_card_btn" onClick={handleLogout}>Log Out</button>
            </article>

            <nav className="navigation">
                    <Link to="/dashboard">Home</Link>
                    <Link to="/dashboard/requests">Requests</Link>
                    <Link to="/dashboard/profile">Profile</Link>
                    <Link to="/dashboard/messages">Messages</Link>
                    <Link to="/dashboard/settings">Settings</Link>
            </nav>
        </aside>
    );
}
