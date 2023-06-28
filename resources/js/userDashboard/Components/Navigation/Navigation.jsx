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
                    <Link to="/dashboard">Home</Link>
                    <Link to="/dashboard/requests">Requests</Link>
                    <Link to="/dashboard/profile">Profile</Link>
                    <Link to="/dashboard/messages">Messages</Link>
                    <Link to="/dashboard/settings">Settings</Link>
            </nav>
        </aside>
    );
}
