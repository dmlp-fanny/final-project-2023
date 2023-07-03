export default function TranslatorSection( { translator }) {
    return (
        <>
            <h3>Experience:</h3>
            <div className="profile_container--section">
                {translator.experience}
            </div>
            <h3>Categories:</h3>
            <div className="profile_container--section">
                {translator.tags.map((tag) => (
                    <li key={tag.id}>{tag.tag_name}</li>
                ))}
            </div>
        </>
    );
}
