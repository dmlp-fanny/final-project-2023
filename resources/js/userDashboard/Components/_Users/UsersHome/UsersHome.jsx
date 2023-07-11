
import { useContext, useEffect, useState } from "react";

import Context from "../../../Context";
import axios from "axios";
import './UsersHome.scss';
import PendingInvitations from "../PendingInvitations/PendingInvitations";
import ConfirmedRequests from "../ConfirmedRequests/ConfirmedRequests";
import Rating from "../Rating/Rating";

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
                if (element.potential_translators.length > 0 && element.translator_id === null) {
                    setUserPendingRequests(current => [...current, element])
                }
                if(element.translator_id) {
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


    return (
        <div>
            <div className="dashboard-header">
                <div className="dashboard-date">Current Date</div>
                <h2>Confirmed Requests</h2>
                <ConfirmedRequests userConfirmedRequests={userConfirmedRequests} />
            </div>
            <div className="dashboard-body">
                <PendingInvitations userPendingRequests={userPendingRequests} />

                <Rating />

            </div>


        </div>
    );
}
