import ConfirmedRequestCard from './ConfirmedRequestCard'
import './ConfirmedRequests.scss'
export default function ConfirmedRequests ({ userConfirmedRequests }) {

    return (
        <div className="confirmed-requests">
            {
                userConfirmedRequests && userConfirmedRequests.map(confirmedRequest => 
                    <ConfirmedRequestCard confirmedRequest={confirmedRequest} />
                )
            }
        </div>
    )
}