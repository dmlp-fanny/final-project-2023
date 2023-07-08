import AcceptBtn from "../AcceptBtn/AcceptBtn";
import './UntakenRequest.scss';


    export default function UntakenRequestsCard({ request }) {
    const { title, description, date, user, from_time, till_time, from_language, to_language } = request;
    
    // console.log(from_language);
    return (
        <>
        <div className="requests untaken_requests_card">
            <div className="request">
                <div className="request__block--main">
                    <h3 className="request__title">
                        <strong>Request title:</strong> {title}
                    </h3>
                    <p className="request__text">Name: {user.first_name + " " + user.last_name}</p>
                    <p className="request__text">
                        <strong>Description:</strong> {description}
                    </p>
                    <p className="request__text">
                        <strong>Date: </strong> {date}
                    </p>
                    <p className="request__text">
                        <strong>From </strong> {from_time} - Till {till_time}
                    </p>
                    <p className="request__text">
                        <strong>From </strong> {from_language.language_name} - To {to_language.language_name}
                    </p>
                    <AcceptBtn />
                </div>
           
            </div>
         </div>
    </>
    );
}
