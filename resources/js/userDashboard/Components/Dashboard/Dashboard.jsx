import ActiveRequests from "../Translators/Dashboard/ActiveRequests";
import CalendarView from "../Translators/Dashboard/CalendarView";
import PendingRequests from "../Translators/Dashboard/PendingRequests";

export default function Dashboard() {
    return (
        <main>
            <div className="main_container">
                <ActiveRequests />

                <CalendarView />

                <PendingRequests />
            </div>
        </main>
    );
}