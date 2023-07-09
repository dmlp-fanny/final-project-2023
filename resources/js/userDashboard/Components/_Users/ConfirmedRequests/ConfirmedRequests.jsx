import ConfirmedRequestCard from './ConfirmedRequestCard'
import './ConfirmedRequests.scss'
export default function ConfirmedRequests ({ userConfirmedRequests }) {

    // console.log(userConfirmedRequests);

    return (
        <div className="confirmed-requests">
            {
                userConfirmedRequests && userConfirmedRequests.map(confirmedRequest => {
                    <ConfirmedRequestCard confirmedRequest={confirmedRequest} />
                })
            }
        </div>
    )
}