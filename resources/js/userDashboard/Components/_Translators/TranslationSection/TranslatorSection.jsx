import Tag from "../../_Users/Tag/Tag";

export default function TranslatorSection( { translator }) {
    console.log(translator);
    return (
        <>
        <div className="profile-wrapper">
                <h3>Experience:</h3>
                <div className="profile_container--section">
                    {translator.experience}
                </div>
                <h3>Categories:</h3>

                <div className="profile_container--section">
                    {translator.tags.map((tag) => (
                        <Tag key={tag.id} tag={tag}/>
                    ))}

                    
                </div>
                <h3>Languages:</h3>
                <div className="profile_container--section">
                    {translator.language_translators.map((language_translator) => (
                        <p key={language_translator.id}> {language_translator.from_language.language_name} ↔ {language_translator.to_language.language_name} </p>
                    ))}
                </div>
            </div>
        </>
    );
}
