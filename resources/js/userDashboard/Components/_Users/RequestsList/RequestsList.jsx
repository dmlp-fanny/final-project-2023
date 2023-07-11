import RequestCard from './RequestCard'
import './RequestsList.scss'

export default function RequestsList ({ myRequests }) {

    return (
        <div className="requestsList">
            <h2>List of Your Requests</h2>
            {
                myRequests?.length ? myRequests.map(myRequest => <RequestCard key={myRequest.id} myRequest={myRequest}/>) : 'No requests made yet'
            }
        </div>
    )
}