import axios from "axios";
import { useEffect, useState } from "react";
import ActiveRequestsCard from "./ActiveRequestsCard";

export default function ActiveRequests() {
    const [activeRequests, setActiveRequests] = useState(null);

    const [userId, setUserId] = useState(1);

    const loadRequests = async () => {
        try {
            const response = await axios.get("/api/requests/" + userId);
            setActiveRequests(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadRequests();
    }, []);

    return (
        <div className="active_requests">
            <h2>Active Requests</h2>
            <div className="active_requests_cards">
                {activeRequests &&
                    activeRequests.map((request) => (
                        <ActiveRequestsCard key={request.id} request={request} />
                    ))}
            </div>
        </div>
    );
}
