import "./Tag.scss";

export default function Tag ({ tag_name }){
    const tags = [
        "Health",
        "Education",
        "Technology",
        "Entertainment",
        "Employment",
        "Travel",
        "Finance",
        "Law",
        "Citizenship",
        "Others"
    ]

    return (
        <>
        {

        }
        <div className="tag tag1">
        Health
        </div>
        <div className="tag tag2">
        Employment
        </div>
        <div className="tag tag3">
        Law
        </div>
        <div className="tag tag4">
        Education
        </div>
        <div className="tag tag5">
        Travel
        </div>
        <div className="tag tag6">
        Language class
        </div>
        <div className="tag tag7">
        Something
        </div>
        <div className="tag tag8">
        Something else
        </div>
        <div className="tag tag9">
        Others
        </div>
        <div className="tag tag10">
        Citizenship
        </div>
    </>
    )
}
