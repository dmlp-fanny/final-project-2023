export default function RequestsList ({ request }) {

    const { title, date, from_time } = request

    return (
        <div className="requestsList">
            <div className="title">{title}</div>
        </div>
    )
}