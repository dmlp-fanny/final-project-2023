
import { useContext } from "react";
import ActiveRequests from "../ActiveRequests/ActiveRequests";
import CalendarView from "../CalendarView";
import PendingRequests from "../PendingRequests/PendingRequests";
import Context from "../../../Context";
import ConfirmedRequests from "../ConfirmedRequests/ConfirmedRequest"
import './TranslatorsHome.scss';
import NewInvitation from "./NewInvitation/NewInvitation";
export default function TranslatorsHome() {

    const { context: {user}} = useContext(Context)

    return (
            <>
            <div className="translator-home">
                <div className="active-request">
                    <CalendarView />
                    {/* <ActiveRequests /> */}
                </div>
                <div className="item confirmed-request">
                    <ConfirmedRequests />
                </div>
                <div className="item new-invitation">
                    <NewInvitation />
                </div>
                <div className="item pending-request">
                    <h2>Pending requests</h2>
                    <PendingRequests />
                </div>
            </div>
            <div className="calendar">
                    <CalendarView />
            </div>

                
            </>
    );
}
