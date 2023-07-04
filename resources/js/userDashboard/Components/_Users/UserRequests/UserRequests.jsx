import { useContext, useEffect, useState } from "react";
import Context from "../../../Context";
import PostRequests from "../PostRequests/PostRequests";
import PostRequestsBtn from "../PostRequestsBtn/PostRequestsBtn";
import axios from "axios";
import RequestsList from "../RequestsList/RequestsList";

export default function UserRequests() {
    const {context: { user }} = useContext(Context);
    const [myRequests, setMyRequests] = useState(null)

    const loadMyRequests = async () => {
        try {
            const response = await axios.get('/api/requests/user/' + user.id)
            setMyRequests(response.data)
        } catch (err) {
            console.log(err)}
    }

    useEffect(() => {
        loadMyRequests()
    }, [])

    return (
   
            <>
                <div className="requests_view">
                    <PostRequests loadMyRequests={loadMyRequests}/>
                </div>
                <div className="requests_sideMenu">
                    <PostRequestsBtn />
                    {
                        myRequests && myRequests.map(request => <RequestsList key={request.id} request={request} /> )
                    }
                </div>
            </>

    );
}
