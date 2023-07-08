
import AcceptBtn from "../AcceptBtn/AcceptBtn";
import DeclineBtn from "../DeclineBtn/DeclineBtn";

export default function PendingRequestCard ({ request }) {

    return (
        <div className="pending-request-card">
            {request.request.title}
            <AcceptBtn requestStatus_id={request.id} />
            <DeclineBtn requestStatus_id={request.id} />
        </div>
    )
}