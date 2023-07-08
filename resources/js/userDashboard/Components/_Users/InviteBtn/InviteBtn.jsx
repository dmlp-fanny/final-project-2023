import axios from "axios"

export default function InviteBtn ( {currentRequest_id, translator_id}) {

    const handleInvitation = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/invite', {
                'requestId': currentRequest_id,
                'translatorId': translator_id,
            })
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
 
    return (
        <form onSubmit={handleInvitation}>
            <button>Invite</button>
        </form>
    )
}