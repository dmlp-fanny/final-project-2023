
import AcceptBtn from "../AcceptBtn/AcceptBtn";
import DeclineBtn from "../DeclineBtn/DeclineBtn";

export default function PendingRequestCard ({ pendingRequest }) {
    const {request:{title, date, from_time, description}} = pendingRequest

    return (
        <div className="pending-request-card">
            <div className="pending-request-info">
                <section className="pending-request-info_title">{title}</section>
                <section>{date}</section>
                <section>{from_time}</section>
            </div>
            <div className="info">{description}</div>
            <AcceptBtn requestStatus_id={pendingRequest.id} />
            <DeclineBtn requestStatus_id={pendingRequest.id} />
        </div>
    )
}