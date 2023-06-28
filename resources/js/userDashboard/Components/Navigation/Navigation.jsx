import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <aside>
            <article className="profile_card">
                <img src="" alt="" />
                <div className="profile_card_name">Name Surname</div>
                <button className="profile_card_btn">Log Out</button>
            </article>

            <nav className="navigation">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/dashboard/requests">Requests</Link>
                </li>
                <li>
                    <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/dashboard/messages">Messages</Link>
                </li>
                <li>
                    <Link to="/dashboard/settings">Settings</Link>
                </li>
            </nav>
        </aside>
    );
}
