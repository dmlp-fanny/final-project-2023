import axios from "axios"
import { useState } from "react";

export default function InviteBtn ( {request_id, translator_id}) {

    const [label, setLabel] = useState('Invite')

    const handleInvitation = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/invite', {
                'requestId': request_id,
                'translatorId': translator_id,
            })

            setLabel('Invitation sent to the translator')

        } catch (err) {
            console.log(err);
        }
    }
 
    return (
        <>
        {
            label === 'Invite' 
            ?
                <form onSubmit={handleInvitation}>
                    <button>{label}</button>
                </form>
            :
            'Invitation sent to the translator'
        }
        </>
    )
}