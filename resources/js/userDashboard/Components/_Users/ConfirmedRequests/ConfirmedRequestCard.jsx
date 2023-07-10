export default function ConfirmedRequestCard ({confirmedRequest}) {

    const {title, date, from_time, translator: {user: translator_info}} = confirmedRequest

    return (
     <div className="confirmed-request-card">
        <section className="confirmed-request-title">{title}</section>
        <section className="confirmed-request-info">
            <span>Date: {date}</span>
            <span>Time: {from_time}</span>
            </section>
        <section className="confirmed-request-translator">Translator: {translator_info.first_name} {translator_info.last_name}</section>
     </div>
    )
}