import axios from "axios";
import ConfirmBtn from "../ConfirmBtn/ConfirmBtn";
import TurnDownBtn from "../TurnDownBtn/TurnDownBtn";
import { useContext, useEffect, useState } from "react";
import Context from "../../../Context";

export default function PendingInvitations () {
    const [userPendingRequests, setUserPendingRequests] = useState(null)

    const { context: {user}} = useContext(Context)

    const loadUserRequests = async () => {
        try {
            const response = await axios.get('/api/requests/pending/' + user.id);
            setUserPendingRequests(response.data)
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadUserRequests()
    }, [])

    return (
        <div className="pending-invitations">
            <h2>Pending Requests</h2>
            <div className="pending-invitations-container">
                {
                    userPendingRequests && userPendingRequests.map(pendingRequest => <li>{pendingRequest.request.title} - {pendingRequest.status.status_name}
                    {
                        pendingRequest.status.id === 3 
                        ? 
                        <>
                        <ConfirmBtn requestStatus_id={pendingRequest.id}/> 
                        <TurnDownBtn requestStatus_id={pendingRequest.id}/> 
                        </>
                        : ''
                    }</li>)
                }
            </div>
        </div>
    )
}