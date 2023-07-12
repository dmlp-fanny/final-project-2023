
import AcceptBtn from "../AcceptBtn/AcceptBtn";
import DeclineBtn from "../DeclineBtn/DeclineBtn";

export default function PendingRequestCard ({ pendingRequest, loadPendingRequests }) {
    const {id, request: { title, date, from_time, description}, status_id, status: {status_name}} = pendingRequest

    return (
        <div className="pending-request-card">
            <div className="pending-request-info">
                <section className="pending-request-info_title">{id + '-' + title}</section>
                <section>{date}</section>
                <section>{from_time}</section>
            </div>
            <div className="info">{description}</div>
            {
                status_id !== 3 ? 
                <div className="pending-buttons">
                    <AcceptBtn  requestStatus_id={pendingRequest.id} loadPendingRequests={loadPendingRequests} />
                    <DeclineBtn requestStatus_id={pendingRequest.id} loadPendingRequests={loadPendingRequests}/>
                </div>
                :
                status_name
            }
        </div>
    )
}