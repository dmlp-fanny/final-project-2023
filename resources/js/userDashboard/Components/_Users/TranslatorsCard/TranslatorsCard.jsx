import InviteBtn from "../InviteBtn/InviteBtn"

export default function TranslatorsCard ({ currentRequest_id, translator }) {
    const {user, tags, id} = translator

    return (
        <div className="translators_card">
            {user.first_name} {user.last_name} 
            <br />
            {
                tags.map(tag => <li key={tag.id}>{tag.tag_name}</li>)
            }
            Available in your selected timeslot
            <InviteBtn currentRequest_id={currentRequest_id} translator_id={id}/>
        </div>
    )
}