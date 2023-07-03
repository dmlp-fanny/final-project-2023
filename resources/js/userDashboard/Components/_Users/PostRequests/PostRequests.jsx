import { useState } from "react";
import TagsSelection from "../TagsSelection/TagsSelection";

export default function PostRequests() {
    const [newRequest, setNewRequest] = useState([]);
    const [selectedTags, setSelectedTags] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "/api/requests/store",
                newRequest
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputValues = (event) => {
        setNewRequest((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
                'tags': selectedTags
            };
        });
    };

    return (
        <main>
            <div className="postRequests_container">
                <h2>Post a Request</h2>
                <form
                    onSubmit={(event) => {
                        handleSubmit(event);
                    }}
                >
                    <input
                        type="text"
                        name="title"
                        value={newRequest.title}
                        onChange={handleInputValues}
                    />
                    <input
                        type="textarea"
                        name="description"
                        value={newRequest.description}
                        onChange={handleInputValues}
                    />
                    <input
                        type="date"
                        name="date"
                        values={newRequest.date}
                        onChange={handleInputValues}
                    />
                    <input type="time" name="time" onChange={handleInputValues} />
                    For how long is this appointment?
                    <input
                        type="text"
                        name="duration"
                        values={newRequest.duration}
                        onChange={handleInputValues}
                    />
                    Where is this appointment?
                    <input
                        type="address"
                        name="address"
                        values={newRequest.address}
                        onChange={handleInputValues}
                    />

                    <TagsSelection selectedTags={selectedTags} setSelectedTags={setSelectedTags} />

                    <button>Submit a Request</button>
                </form>
            </div>

        </main>
    );
}
