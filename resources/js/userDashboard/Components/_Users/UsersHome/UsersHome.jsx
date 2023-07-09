
import { useContext, useEffect, useState } from "react";

import Context from "../../../Context";
import axios from "axios";
import './UsersHome.scss';
import PendingInvitations from "../PendingInvitations/PendingInvitations";
import ConfirmedRequests from "../ConfirmedRequests/ConfirmedRequests";

export default function UsersHome() {

const [userConfirmedRequests, setUserConfirmedRequests] = useState([]);
const [userPendingRequests, setUserPendingRequests] = useState([]);

    const {context: { user }} = useContext(Context);

    const loadUserRequests = async () => {
        try {
            const response = await axios.get(
                "/api/requests/user/" + user.id
            );

            response.data.forEach(element => {
                if (element.potential_translators.length > 0) {
                    setUserPendingRequests(current => [...current, element])
                }
                if(element.translator_id !== null) {
                    setUserConfirmedRequests(current => [...current, element])
                }
            })
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadUserRequests();
    }, []);

    console.log(userConfirmedRequests);
    return (
        <div>
            <div className="dashboard-header">
                <div className="dashboard-date">Current Date</div>
                <h2>Confirmed Requests</h2>
                <ConfirmedRequests userConfirmedRequests={userConfirmedRequests} />
            </div>
                <PendingInvitations userPendingRequests={userPendingRequests} />
        </div>
    );
}
