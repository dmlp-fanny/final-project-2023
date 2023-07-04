
import ActiveRequests from "../_Translators/ActiveRequests/ActiveRequests";
import CalendarView from "../_Translators/CalendarView";
import PendingRequests from "../_Translators/PendingRequests";

export default function Dashboard() {
    return (
            <>
                <ActiveRequests />

                <CalendarView />

                <PendingRequests />
            </>
    );
}
