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
            {user ? (
                <div className="profile_container">
                    <h2>Your Profile</h2>
                    <h3>Personal Information:</h3>
                    <div className="profile_container_section-bold">
                        First Name:<span>{user.first_name}</span> <br />
                        Last Name:<span>{user.last_name}</span> <br />
                        Username: <span>{user.username}</span> <br />
                        Email: <span>{user.email}</span> <br />
                        Location: <span>{user.location + ', ' + user.country}</span> <br />
                        Phone Number: <span>{user.phone_number}</span> <br />
                    </div>
                    <h3>Experience:</h3>
                    <div className="profile_container_section">
                        {user.translator.experience}
                    </div>
                    <h3>Categories:</h3>
                    <div className="profile_container_section"></div>
                </div>
            ) : (
                ""
            )}
        </main>
    );
}
