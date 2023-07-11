import ConfirmedRequestCard from "./ConfirmedRequestCard"
import './ConfirmedRequest.scss'

export default function ConfirmedRequests ({confirmedRequests}) {

    return (
        <div className="translatorconfirmed-requests">
            <h2>Confirmed Requests</h2>
            <div className="translatorconfirmed-requests-container">
            {
                confirmedRequests && confirmedRequests.map(confirmedRequest => <ConfirmedRequestCard confirmedRequest={confirmedRequest}/>)
            }
            </div>
        </div>
    )
}