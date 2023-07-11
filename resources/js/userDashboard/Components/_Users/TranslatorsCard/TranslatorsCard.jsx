import InviteBtn from "../InviteBtn/InviteBtn"

export default function TranslatorsCard ({ request_id, translator, interactedWith }) {
    const {user, tags, id} = translator

    return (
        <div className="translators_card">
            <div className="translators-info">
                {user.first_name} {user.last_name}
                
                <br />
                {
                    tags.map(tag => <li key={tag.id}>{tag.tag_name}</li>)
                }
            </div>
            <div className="translators-availability">
                Available in your selected timeslot
            </div>
            {interactedWith ? "Already sent" : <InviteBtn request_id={request_id} translator_id={id}/>}
                
        </div>
    )
}