import axios from "axios";

export default function ConfirmBtn ({ requestStatus_id, loadUserRequests }) {

    const handleConfirmingOffer = async (event) => {
        
        event.preventDefault();

        const response = await axios.post ('/change-status', {
            'requestStatusId': requestStatus_id,
            'action': 'confirm'
        })

        if (response) {
            loadUserRequests()
        }
    }

    return (
        <form onSubmit={handleConfirmingOffer}>
            <button>Confirm</button>
        </form>
    )
}