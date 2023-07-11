import { Link, useNavigate } from "react-router-dom"

export default function RequestCard ({myRequest}) {

    const {title, description,date, from_time, id} = myRequest;
    

    return (

            <div className="requests-card">
                <section className="requests-card-title">{title}</section>
                <section>{description}</section>
                <section className="requests-card-datetime"><span>{date}</span><span>{from_time}</span></section>
                <Link to={'/dashboard/requests/request-detail/' + id}>Detail of the Request</Link>
            </div>

    )
}