import axios from "axios";

export default function ConfirmBtn ({ requestStatus_id }) {

    const handleConfirmingOffer = async (event) => {
        
        event.preventDefault();

        const response = await axios.post ('/change-status', {
            'requestStatusId': requestStatus_id,
            'action': 'confirm'
        })
    }

    return (
        <form onSubmit={handleConfirmingOffer}>
            <button>Confirm</button>
        </form>
    )
}