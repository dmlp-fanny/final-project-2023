import axios from "axios";

export default function DeclineBtn ({ requestStatus_id }) {

    const handleDecliningInvitation = async (event) => {
        event.preventDefault();

        const response = await axios.post ('/change-status', {
            'requestStatusId': requestStatus_id,
            'action': 'decline'
        })
    }

    return (
        <form onSubmit={handleDecliningInvitation}>
            <button>Decline</button>
        </form>
    )
}