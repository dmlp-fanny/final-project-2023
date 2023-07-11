
import { useContext, useEffect, useState } from "react";
import ActiveRequests from "../ActiveRequests/ActiveRequests";
import CalendarView from "../CalendarView";
import PendingRequests from "../PendingRequests/PendingRequests";
import Context from "../../../Context";
import ConfirmedRequests from "../ConfirmedRequests/ConfirmedRequest"
import './TranslatorsHome.scss';
import NewInvitation from "./NewInvitation/NewInvitation";
import axios from "axios";
export default function TranslatorsHome() {

    const { context: {user}} = useContext(Context)

    const [confirmedRequests, setConfirmedRequests] = useState([])
    const [pendingRequests, setPendingRequests] = useState([])

    const loadPendingRequests = async () => {
        try{
            const response = await axios.get('api/translators/' + user.translator.id)
            response.data.potential_requests.forEach(element => {
                if (element.status_id !== 1) {
                    setPendingRequests(current => [...current, element])
                }
            })

            setConfirmedRequests(response.data.requests)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadPendingRequests()
    }, [])

    return (
            <>
            <div className="translator-home">
                <div className="active-request">
                    <CalendarView />
                    {/* <ActiveRequests /> */}
                </div>
                <div className="item confirmed-request">
                    <ConfirmedRequests confirmedRequests={confirmedRequests}/>
                </div>
                <div className="item new-invitation">
                    <NewInvitation />
                </div>
                <div className="item pending-request">
                    <h2>Pending requests</h2>
                    <PendingRequests pendingRequests={pendingRequests}/>
                </div>
            </div>
            <div className="calendar">
                    <CalendarView />
            </div>

                
            </>
    );
}
