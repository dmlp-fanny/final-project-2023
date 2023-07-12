import { Link, useNavigate } from "react-router-dom"

export default function RequestCard ({myRequest}) {

    const {title, description, date, from_time, id} = myRequest;
    


    return (

            <div className="requests-card">
                <section className="requests-card-title">{title}</section>
                <section className="requests-card-info">
                    <section className="requests-card-date">{date}</section>
                    <section className="requests-card-time">{from_time}</section>
                    <Link to={'/dashboard/requests/request-detail/' + id}>Detail of the Request</Link>
                </section>
            </div>

    )
}