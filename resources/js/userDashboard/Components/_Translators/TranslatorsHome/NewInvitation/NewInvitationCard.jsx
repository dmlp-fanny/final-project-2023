export default function NewInvitationCard () {
    return (
        <>
        <div className="new_invitation">
            <div className="new_invitation_main">
                <div className="new_invitation__block--main">
                    <h4 className="new_invitation__title">
                        Request title: {title}
                    </h4>
                    <p className="new_invitation__title">Name: {user.first_name + " " + user.last_name}</p>
                    <p className="new_invitation__title">
                        <strong>Description:</strong> {description}
                    </p>
                    <p className="new_invitation__title">
                        <strong>Date: </strong> {date}
                    </p>
                    <p className="new_invitation__title">
                        <strong>From </strong> {from_time} - Till {till_time}
                    </p>
                    <p className="new_invitation__title">
                        <strong>From </strong> {from_language.language_name} - To {to_language.language_name}
                    </p>
                    <AcceptBtn />
                </div>
           
            </div>
         </div>
    </>
    );
}