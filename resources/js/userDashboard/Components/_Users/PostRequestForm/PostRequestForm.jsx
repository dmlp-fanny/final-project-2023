import { useState } from "react";
import TagsSelection from "../TagsSelection/TagsSelection";
import axios from "axios";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import { useNavigate } from "react-router-dom";

export default function PostRequestsForm({ loadMyRequests, setCurrentRequest_id }) {
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

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/api/requests/store", {
                ...newRequest,
                tags: selectedTags,
            });

            setCurrentRequest_id(response.data);
            navigate('/dashboard/requests/matching');
            loadMyRequests();
            
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
            <>
                <h2>Post a Request</h2>
                <form
                    onSubmit={(event) => {
                        handleSubmit(event);
                    }}
                >
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={newRequest.title}
                        onChange={handleInputValues}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={newRequest.description}
                        onChange={handleInputValues}
                    />
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={newRequest.date}
                        onChange={handleInputValues}
                    />
                    <label htmlFor="time">Time</label>
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
                    <label htmlFor="tag">Select tag(s) which best describes expertise areas</label>
                    <TagsSelection
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />

                    From which language? 

                    <LanguageSelection from_language={newRequest.from_language} to_language={newRequest.to_language} handleInputValues={handleInputValues} />

                    <button>Submit a Request</button>
                </form>
            </>
    );
}
