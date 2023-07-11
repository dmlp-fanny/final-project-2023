import PendingRequestCard from "./PendingRequestCard";
import './PendingRequests.scss'

export default function PendingRequests ({pendingRequests, loadPendingRequests}) {

    return (
       <div className="pending_requests">
        <h2>Pending Requests</h2>
        <div className="pending_requests_container">
            {
                pendingRequests && pendingRequests.map(request => <PendingRequestCard key={request.id} loadPendingRequests={loadPendingRequests} pendingRequest={request} />)
            }
        </div>
       </div>
    )
}