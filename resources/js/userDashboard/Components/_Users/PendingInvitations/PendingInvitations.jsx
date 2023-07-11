
import "./PendingInvitations.scss";
import PendingInvitationCard from "./PendingInvitationCard";

export default function PendingInvitations({userPendingRequests}) {

    return (
        <div className="pending-invitations">
            <h2>Pending Requests</h2>
            <div className="pending-invitations-container">
                {
                   userPendingRequests && userPendingRequests.map(pendingRequest => <PendingInvitationCard key={pendingRequest.id} pendingRequest={pendingRequest}/>)
                }
            </div>
        </div>
    );

}
