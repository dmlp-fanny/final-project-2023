
import ActiveRequests from "../_Translators/ActiveRequests/ActiveRequests";
import CalendarView from "../_Translators/CalendarView";
import PendingRequests from "../_Translators/PendingRequests";

export default function Dashboard() {
    return (
        <main>
            <div className="dashboard_container">
                <ActiveRequests />

                <CalendarView />

                <PendingRequests />
            </div>
        </main>
    );
}
