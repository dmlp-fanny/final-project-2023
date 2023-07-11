import ConfirmedRequestCard from "./ConfirmedRequestCard"

export default function ConfirmedRequests ({confirmedRequests}) {

    console.log(confirmedRequests);
    return (
        <div className="confirmed-requests">
            <h2>Confirmed Requests</h2>
            {
                confirmedRequests && confirmedRequests.map(confirmedRequest => <ConfirmedRequestCard confirmedRequest={confirmedRequest}/>)
            }
        </div>
    )
}