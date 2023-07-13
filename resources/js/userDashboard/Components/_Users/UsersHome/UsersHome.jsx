
import { useContext, useEffect, useState } from "react";

import Context from "../../../Context";
import axios from "axios";
import './UsersHome.scss';
import PendingInvitations from "../PendingInvitations/PendingInvitations";
import ConfirmedRequests from "../ConfirmedRequests/ConfirmedRequests";
import Rating from "../Rating/Rating";
import CurrentDate from "../../CurrentDate/CurrentDate";

export default function UsersHome() {

const [userConfirmedRequests, setUserConfirmedRequests] = useState([]);
const [userPendingRequests, setUserPendingRequests] = useState([]);


    const {context: { user }} = useContext(Context);

    const loadUserRequests = async () => {
        try {
            const response = await axios.get(
                "/api/requests/user/" + user.id
            );
            
            const nextStatePendRequests = []
            const nextStateConfRequests = []


            response.data.forEach(element => {
                if (element.potential_translators.length > 0 && element.translator_id === null) {
                    nextStatePendRequests.push(element)
                }
                if(element.translator_id) {
                    nextStateConfRequests.push(element)
                }
            })

            setUserPendingRequests(nextStatePendRequests)
            setUserConfirmedRequests(nextStateConfRequests)

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

                <CurrentDate />
                <h2>Confirmed Requests</h2>
                {
                    userPendingRequests?.length > 0 ? <ConfirmedRequests userConfirmedRequests={userConfirmedRequests} /> : 'No confirmed requests yet'
                }


                
            </div>
            <div className="dashboard-body">
   
                <PendingInvitations userPendingRequests={userPendingRequests} loadUserRequests={loadUserRequests}/>

                <Rating />

            </div>


        </div>
    );
}
