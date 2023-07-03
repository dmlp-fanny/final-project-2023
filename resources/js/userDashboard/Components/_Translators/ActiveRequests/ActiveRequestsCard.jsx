export default function ActiveRequestsCard({ request }) {
    const { title, description, date, user } = request;

    return (
        <div className="active_requests_card">
            <div className="active_requests_card-title">{user.first_name + ' ' + user.last_name}</div>
            <div className="active_requests_card-desc">
                <section>
                    <strong>Title:</strong> {title}
                </section>
                <section>
                    <strong>Description:</strong> {description}
                </section>
                <section>
                    <strong>Date: </strong> {date}
                </section>
            </div>
        </div>
    );
}
