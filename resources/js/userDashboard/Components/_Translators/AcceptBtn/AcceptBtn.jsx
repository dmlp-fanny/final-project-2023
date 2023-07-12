import axios from "axios";

export default function AcceptBtn ({ requestStatus_id, loadPendingRequests }) {

    const handleAcceptingInvitation = async (event) => {
        event.preventDefault();

        const response = await axios.post ('/change-status', {
            'requestStatusId': requestStatus_id,
            'action': 'accept'
        })

        response && loadPendingRequests()
    }

    return (
        <form onSubmit={handleAcceptingInvitation}>
            <button className="acceptBtn">Accept</button>
        </form>
    )
}