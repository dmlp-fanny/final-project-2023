export default function TranslatorsCard ({ translator }) {
    const {user, tags} = translator

    return (
        <div className="translators_card">
            {user.first_name} {user.last_name} 
            <br />
            {
                tags.map(tag => <li key={tag.id}>{tag.tag_name}</li>)
            }
            Available in your selected timeslot
            <button>Invite</button>
        </div>
    )
}