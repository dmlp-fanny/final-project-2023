import InviteBtn from "../InviteBtn/InviteBtn"
import Tag from "../Tag/Tag"

export default function TranslatorsCard ({ request_id, translator, interactedWith }) {
    const {user, tags, id} = translator

    return (
        <>
        <div className="translators_card">
            
            <div className="translators-info">
                
                {user.first_name} {user.last_name}
                
                <br />
                <p>{tags.map((tag) => (
                        <Tag key={tag.id} tag={tag}/>
                    ))}</p>
                
            </div>
        
            <div>
            {interactedWith ? "Already sent" : <InviteBtn request_id={request_id} translator_id={id}/>}
            </div>  
        </div>
        </>
    )
}