import InvitedTranslators from "./InvitedTranslators";

export default function PendingInvitationCard ({pendingRequest}) {

    const { title, description, date, potential_translators } = pendingRequest

    return (
        <div className="pending-invitation-card">
            <div className="pending-invitation">
                <section className="pending-invitation-info"><span>{title}</span><br />{description}</section>
                <section className="pending-invitation-date">{date}</section>
            </div>
            <div className="potential-translators">
                {
                    potential_translators && potential_translators.map(translator => <InvitedTranslators key={translator.id} translatorData={translator} />)
                }
            </div>
        </div>
    )
}