import { useContext, useEffect, useState } from "react";
import CalendarView from "../CalendarView";
import PendingRequests from "../PendingRequests/PendingRequests";
import Context from "../../../Context";
import ConfirmedRequests from "../ConfirmedRequests/ConfirmedRequests"
import './TranslatorsHome.scss';
import axios from "axios";
import CurrentDate from "../../CurrentDate/CurrentDate";
export default function TranslatorsHome() {

    const { context: {user}} = useContext(Context)

    const [confirmedRequests, setConfirmedRequests] = useState([])
    const [pendingRequests, setPendingRequests] = useState([])

    const loadPendingRequests = async () => {

        try{
            const response = await axios.get('api/translators/' + user.translator.id)
            const nextStateRequests = []
            response.data.potential_requests.forEach(element => {
                if (element.status_id !== 1) {
                    nextStateRequests.push(element)
                }
            })
            setPendingRequests(nextStateRequests)

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
            <div className="dashboard-header">
                <CurrentDate />
                
                <CalendarView />
            </div>
            <div className="dashboard-body">
                <ConfirmedRequests confirmedRequests={confirmedRequests} />
                
                <PendingRequests pendingRequests={pendingRequests} loadPendingRequests={loadPendingRequests}/>
            </div>
        </>
    );
}
