export default function Tag (props){
    return (
        <div className="profile_container--section">
                    {props.translator.tags.map((tag) => (
                        <li key={tag.id}>{tag.tag_name}</li>
                    ))}
        </div>
    )
}