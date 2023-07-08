
import { useContext, useEffect, useState } from "react";

import Context from "../../../Context";
import axios from "axios";

import PendingInvitations from "../PendingInvitations/PendingInvitations";

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
            <PendingInvitations />
        </div>
    );
}
