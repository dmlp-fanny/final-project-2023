export default function UntakenRequestsCard({ request }) {
    const { title, description, date, user, from_time, till_time, from_language, to_language } = request;

    return (
        <div className="untaken_requests_card">
            <div className="untaken_requests_card-title">{user.first_name + ' ' + user.last_name}</div>
            <div className="untaken_requests_card-desc">
                <h3>
                    <strong>Title:</strong> {title}
                </h3>
                <p>
                    <strong>Description:</strong> {description}
                </p>
                <p>
                    <strong>Date: </strong> {date}
                </p>
                <p>
                    <strong>From </strong> {from_time} - Till {till_time}
                </p>
                <p>
                    <strong>From </strong> {from_language} - To {to_language}
                </p>
            </div>
        </div>
    );
}
