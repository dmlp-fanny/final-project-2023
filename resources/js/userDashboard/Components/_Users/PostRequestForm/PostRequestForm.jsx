import { useEffect, useState } from "react";
import TagsSelection from "../TagsSelection/TagsSelection";
import axios from "axios";
import LanguageSelection from "../LanguageSelection/LanguageSelection";
import { useNavigate, useParams } from "react-router-dom";
import './PostRequestForm.scss'

export default function PostRequestsForm({ loadMyRequests }) {
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
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const {request_id} = useParams();

    const loadSubmittedRequest = async () => {
            const response = await axios.get(`/api/requests/${request_id}`)
            setNewRequest(response.data);
    }

    useEffect(() => {
        loadSubmittedRequest()
    }, [request_id])

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/api/requests/store" + (request_id ? '/' + request_id : ''), {
                ...newRequest,
                tags: selectedTags,
            });

            navigate('/dashboard/requests/matching/' + response.data);
            loadMyRequests();
            
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    setErrors(error.response.data.errors);//add this 
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
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
                <h2>{request_id ? 'Edit a Request' : 'Post a Request'}</h2>
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
                    {
                    errors['title']
                    ? errors['title'].map(error => <div className="error">{ error }</div>)
                    : ''
                    }
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={newRequest.description}
                        onChange={handleInputValues}
                    />
                    {
                    errors['description']
                    ? errors['description'].map(error => <div className="error">{ error }</div>)
                    : ''
                    }
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={newRequest.date}
                        onChange={handleInputValues}
                    />
                    {
                    errors['date']
                    ? errors['date'].map(error => <div className="error">{ error }</div>)
                    : ''
                    }
                    <label htmlFor="time">When is your appointment? (Working hours is 7-19)</label>
                    <input
                        type="time"
                        name="time"
                        value={newRequest.time}
                        onChange={handleInputValues}
                    />
                    {
                    errors['time']
                    ? errors['time'].map(error => <div className="error">{ error }</div>)
                    : ''
                    }
                    <label htmlFor="duration">For how long is this appointment (from 1-8 hours)?</label>
                    <input
                        id="duration"
                        type="number"
                        name="duration"
                        min="1"
                        max="8"
                        value={newRequest.duration}
                        onChange={handleInputValues}
                    />
                    {
                    errors['duration']
                    ? errors['duration'].map(error => <div className="error">{ error }</div>)
                    : ''
                    }
                    <label htmlFor="tag">Select tag(s) which best describes expertise areas</label>
                    <TagsSelection
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />

                    From which language? 

                    <LanguageSelection from_language={newRequest.from_language} to_language={newRequest.to_language} handleInputValues={handleInputValues} />

                    <button>{request_id ? 'Re-submit a Request' : 'Submit a Request'}</button>
                </form>
            </>
    );
}
