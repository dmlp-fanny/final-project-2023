
import ActiveRequests from "../Translators/ActiveRequests/ActiveRequests";
import CalendarView from "../Translators/CalendarView";
import PendingRequests from "../Translators/PendingRequests";

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
