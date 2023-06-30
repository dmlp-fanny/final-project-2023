import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
    const [user, setUser] = useState(null);
    const userId = 11;

    const loadUser = async () => {
        try {
            const response = await axios.get("/api/users/" + userId);
            setUser(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <main>
            <div className="profile_container">
                <h2>Your Profile</h2>
                <h3>Personal Information:</h3>
                <div className="profile_container_section">
                </div>
                <h3>Experience:</h3>
                <div className="profile_container_section">
                    {user.translator.experience}
                </div>
                <h3>Categories:</h3>
                <div className="profile_container_section"></div>
            </div>
        </main>
    );
}
