import axios from "axios";

export default function AcceptBtn ({ requestStatus_id }) {

    const handleAcceptingInvitation = async (event) => {
        event.preventDefault();

        const response = await axios.post ('/change-status', {
            'requestStatusId': requestStatus_id,
            'action': 'accept'
        })
    }

    return (
        <form onSubmit={handleAcceptingInvitation}>
            <button>Accept</button>
        </form>
    )
}