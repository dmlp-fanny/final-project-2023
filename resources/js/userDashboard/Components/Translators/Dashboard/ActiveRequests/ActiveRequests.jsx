import axios from "axios";
import { useEffect, useState } from "react";
import ActiveRequestsCard from "./ActiveRequestsCard";

export default function ActiveRequests() {
    const [activeRequests, setActiveRequests] = useState(null)

    const [userId, setUserId] = useState(1)

    const loadRequests = async () => {
        try {
            const response = await axios.get('/api/requests/' + userId)
            setActiveRequests(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadRequests()
    }, [])

    return (
        <div className="active_requests">
            <div className="active_requests_label">Active<br/> Requests</div>
            {
                activeRequests && activeRequests.map(request => <ActiveRequestsCard request={request} />)
            }
        </div>
    );
}
