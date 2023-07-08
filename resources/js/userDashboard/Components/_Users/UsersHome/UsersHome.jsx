
import { useContext, useEffect, useState } from "react";

import Context from "../../../Context";
import axios from "axios";
import ConfirmBtn from "../ConfirmBtn/ConfirmBtn";
import TurnDownBtn from "../TurnDownBtn/TurnDownBtn";

export default function UsersHome() {

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
        <div>
            {
                userPendingRequests && userPendingRequests.map(request => {
                return <li key={request.id}>
                    {request.request.title}<br/>
                    {request.status.status_name}<br />
                    {
                        request.status.id === 3 
                        ? 
                        <>
                        <ConfirmBtn requestStatus_id={request.id}/> 
                        <TurnDownBtn requestStatus_id={request.id}/> 
                        </>
                        : ''
                    }
                </li>})
            }
        </div>
    );
}
