import InvitedTranslators from "./InvitedTranslators";

export default function PendingInvitationCard ({pendingRequest}) {

    const { title, description, date, from_time, potential_translators } = pendingRequest

    return (
        <div className="pending-invitation-card">
            <div className="potential-invitation-heading">Request</div>
            <div className="pending-invitation">
                <section className="pending-invitation-info"><span>{title}</span><br />{description}</section>
                <section className="pending-invitation-datetime">{date} <br />{from_time}</section>
            </div>
            <div className="potential-invitation-heading">Potential translators</div>
                {
                    potential_translators && potential_translators.map(translator => <InvitedTranslators key={translator.id} translatorData={translator} />)
                }
            
        </div>
    )
}