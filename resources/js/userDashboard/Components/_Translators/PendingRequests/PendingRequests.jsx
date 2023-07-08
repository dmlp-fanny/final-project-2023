import axios from "axios"
import { useContext, useEffect, useState } from "react";
import Context from "../../../Context";
import PendingRequestCard from "./PendingRequestCard";

export default function PendingRequests () {
    const [pendingRequests, setPendingRequests] = useState(null)

    const { context: { user: {translator} } } = useContext(Context)

    const loadPendingRequests = async () => {
        try{
            const response = await axios.get('api/translators/' + translator.id)
            setPendingRequests(response.data.potential_requests);
            console.log(response.data.potential_requests);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadPendingRequests()
    }, [])

    return (
       <div className="pending_requests">
        {
            pendingRequests && pendingRequests.map(request => <PendingRequestCard key={request.id} request={request} />)
        }
       </div>
    )
}