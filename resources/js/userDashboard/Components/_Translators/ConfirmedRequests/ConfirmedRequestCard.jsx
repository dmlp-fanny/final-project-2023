export default function ConfirmedRequestCard ({confirmedRequest}) {

    const {title, date, from_time} = confirmedRequest
    
    return (
        <>
        <div className="requests confirmed_requests_card">
            <div className="pending-request-info">
                <section className="pending-request-info_title">{title}</section>
                <section>{date}</section>
                <section>{from_time}</section>
            </div>
         </div>
    </>
    );
}