import { useState } from "react";
import TagsSelection from "../TagsSelection/TagsSelection";
import axios from "axios";
import LanguageSelection from "../LanguageSelection/LanguageSelection";

export default function PostRequests() {
    const [newRequest, setNewRequest] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        duration: '',
        from_language: '',
        to_language: '',
        tags: []
    });
    const [selectedTags, setSelectedTags] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log({...newRequest, 'tags': selectedTags});
        try {
            const response = await axios.post("/api/requests/store", {
                ...newRequest,
                tags: selectedTags,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputValues = (event) => {
        setNewRequest((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
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
                        type="text"
                        name="description"
                        value={newRequest.description}
                        onChange={handleInputValues}
                    />
                    <input
                        type="date"
                        name="date"
                        value={newRequest.date}
                        onChange={handleInputValues}
                    />
                    <input
                        type="time"
                        name="time"
                        value={newRequest.time}
                        onChange={handleInputValues}
                    />
                    For how long is this appointment (in hours)?
                    <input
                        type="number"
                        name="duration"
                        value={newRequest.duration}
                        onChange={handleInputValues}
                    />
                    
                    <TagsSelection
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />

                    From which language? 

                    <LanguageSelection from_language={newRequest.from_language} to_language={newRequest.to_language} handleInputValues={handleInputValues} />

                    <button>Submit a Request</button>
                </form>
            </div>
        </main>
    );
}