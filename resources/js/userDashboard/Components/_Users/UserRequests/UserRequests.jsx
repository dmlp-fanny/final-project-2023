import { useContext, useEffect, useState } from "react";
import Context from "../../../Context";
import PostRequestsBtn from "../PostRequestsBtn/PostRequestsBtn";
import axios from "axios";
import RequestsList from "../RequestsList/RequestsList";
import { Route, Routes } from "react-router-dom";
import Matching from "../Matching";
import RequestDetail from "../RequestDetail";
import PostRequestsForm from "../PostRequestForm/PostRequestForm";

export default function UserRequests() {
    const {context: { user }} = useContext(Context);
     
    const [myRequests, setMyRequests] = useState(null)
    const [currentRequest_id, setCurrentRequest_id] = useState(null)

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
                    <Routes>
                        <Route path='/' />
                        <Route path='/post-request' element={<PostRequestsForm setCurrentRequest_id={setCurrentRequest_id} loadMyRequests={loadMyRequests}/>}/>
                        <Route path='/matching' element={<Matching currentRequest_id={currentRequest_id}/> }/>
                        <Route path='/request-detail' element={<RequestDetail/> }/>
                    </Routes>

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
