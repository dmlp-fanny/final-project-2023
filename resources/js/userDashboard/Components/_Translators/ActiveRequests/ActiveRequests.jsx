import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ActiveRequestsCard from "./ActiveRequestsCard";
import Context from "../../../Context";


export default function ActiveRequests() {
    const [activeRequests, setActiveRequests] = useState(null);

    const { context: { user }} = useContext(Context)

    const loadRequests = async () => {
        try {
            const response = await axios.get(`/api/translators/${user.id}`);
            console.log(response);
            setActiveRequests(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadRequests();
    }, [user]);

    return (
        <div className="active_requests">
            <div className="active_requests_cards">
                {activeRequests &&
                    activeRequests.map((request) => (
                        <ActiveRequestsCard key={request.id} request={request} />
                    ))}
            </div>
        </div>
    );
}
