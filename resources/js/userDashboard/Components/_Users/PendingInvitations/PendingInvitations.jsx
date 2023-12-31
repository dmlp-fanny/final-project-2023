
import "./PendingInvitations.scss";
import PendingInvitationCard from "./PendingInvitationCard";

export default function PendingInvitations({userPendingRequests, loadUserRequests}) {

    return (
        <div className="pending-invitations">
            <h2>Pending Requests</h2>
            <div className="pending-invitations-container">
                {
                   userPendingRequests?.length > 0 ? userPendingRequests.map(pendingRequest => <PendingInvitationCard key={pendingRequest.id} loadUserRequests={loadUserRequests} pendingRequest={pendingRequest}/>) : 'No Pending Requests yet.'
                }
            </div>
        </div>
    );

}
