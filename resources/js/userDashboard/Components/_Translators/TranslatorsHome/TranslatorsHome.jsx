
import { useContext } from "react";
import ActiveRequests from "../ActiveRequests/ActiveRequests";
import CalendarView from "../CalendarView";
import PendingRequests from "../PendingRequests/PendingRequests";
import Context from "../../../Context";

export default function TranslatorsHome() {

    const { context: {user}} = useContext(Context)

    return (
            <>
                <ActiveRequests />

                <CalendarView />

                <PendingRequests />
            </>
    );
}
