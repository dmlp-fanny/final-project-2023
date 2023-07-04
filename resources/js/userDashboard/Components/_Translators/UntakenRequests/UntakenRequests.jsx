import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UntakenRequestsCard from "./UntakenRequestsCard";
import Context from "../../../Context";


export default function UntakenRequests() {
    const [untakenRequests, setUntakenRequests] = useState(null);

    const { context: { user }} = useContext(Context)

    const loadRequests = async () => {
        try {
            // const response = await axios.get("/api/requests/" + (user ? user.id : 0));
            const response = await axios.get("/api/requests/");
            setUntakenRequests(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadRequests();
    }, []);


    return (
        <div className="untaken_requests">
            <h2>Untaken Requests</h2>
            <div className="untaken_requests_cards">
                {untakenRequests &&
                    untakenRequests.map((request) => (
                        <UntakenRequestsCard key={request.id} request={request} />
                    ))}
            </div>
        </div>
    );
}
