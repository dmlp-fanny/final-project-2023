import { useState } from "react";
import PostRequestsBtn from "../PostRequestsBtn/PostRequestsBtn";

export default function PostRequests() {
    const [newRequest, setNewRequest] = useState(null);

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
                        // value={newRequest.title}
                        onChange={handleInputValues}
                    />
                    <input
                        type="textarea"
                        // value={newRequest.description}
                        onChange={handleInputValues}
                    />
                    <input type="text" placeholder="tags" />
                    <input
                        type="date"
                        // values={newRequest.date}
                        onChange={handleInputValues}
                    />
                    <input type="time" onChange={handleInputValues} />
                    For how long is this appointment?
                    <input
                        type="text"
                        // values={newRequest.duration}
                        onChange={handleInputValues}
                    />
                    Where is this appointment?
                    <input
                        type="address"
                        // values={newRequest.address}
                        onChange={handleInputValues}
                    />
                    <button>Submit a Request</button>
                </form>
            </div>

            {/* <PostRequestsBtn /> */}
        </main>
    );
}
