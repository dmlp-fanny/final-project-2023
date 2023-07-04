import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import "./UserDashboard.scss";
import ViewRequests from "./Components/_Translators/ViewRequests";
import UserRequests from "./Components/_Users/UserRequests/UserRequests";
import { useContext } from "react"
import Context from "./Context"

export default function UserDashboard() {
    const { context: {user} } = useContext(Context);

    return (
        <div className="dashboard">
                <Navigation />
                
                <main>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/requests" element={user.translator ? <ViewRequests /> : <UserRequests /> } />
                    </Routes>
                </main>
        </div>
    );
}
