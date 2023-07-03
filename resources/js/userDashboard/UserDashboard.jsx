import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Requests from "./Components/Requests/Requests";
import Register from "./Auth/Register";
import './UserDashboard.scss';

export default function UserDashboard() {

    return (
        <div className="dashboard">

            <BrowserRouter>
                <Navigation />
                <main>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route
                        path="/dashboard/profile"
                        element={<Profile />}
                    ></Route>
                    <Route
                        path="/dashboard/requests"
                        element={<Requests />}
                    ></Route>
                    <Route
                        path="/dashboard/register"
                        element={<Register />}
                    ></Route>
                </Routes>
        </main>
            </BrowserRouter>
        </div>
        
    );
}
