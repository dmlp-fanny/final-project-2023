import axios from "axios";

export default function TurnDownBtn ({ requestStatus_id }) {

    const handleTurningDownOffer = async (event) => {
        event.preventDefault();

        const response = await axios.post ('/change-status', {
            'requestStatusId': requestStatus_id,
            'action': 'turn down'
        })
    }

    return (
        <form onSubmit={handleTurningDownOffer}>
            <button>Turn Down</button>
        </form>
    )
}