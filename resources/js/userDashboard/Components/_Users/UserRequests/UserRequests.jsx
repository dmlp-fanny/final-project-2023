import { useContext, useEffect, useState } from "react";
import Context from "../../../Context";
import PostRequestsBtn from "../PostRequestsBtn/PostRequestsBtn";
import axios from "axios";
import RequestsList from "../RequestsList/RequestsList";
import { Route, Routes } from "react-router-dom";
import Matching from "../Matching/Matching";
import RequestDetail from "../RequestDetail";
import PostRequestsForm from "../PostRequestForm/PostRequestForm";

export default function UserRequests() {
    const {context: { user }} = useContext(Context);

    const [myRequests, setMyRequests] = useState(null)

    const loadMyRequests = async () => {
        try {
            const response = await axios.get('/api/requests/user/' + user.id)
            setMyRequests(response.data)
            console.log(response.data);
        } catch (err) {
            console.log(err)}
    }

    useEffect(() => {
        loadMyRequests()
    }, [])

    return (
            <> 
                <div className="searchbar_post">
                    <div className="searchbar">
                        <input type="text" placeholder="Searching here" />
                    </div>
                    <div className="requests_sideMenu">
                        <PostRequestsBtn />
                    </div>
                </div>
                <div className="requests_view">
                    <Routes>
                        <Route path='/' element={<RequestsList myRequests={myRequests}/>}/>
                        <Route path='/post-request' element={<PostRequestsForm  loadMyRequests={loadMyRequests}/>}/>
                        <Route path='/matching' element={<Matching myRequests={myRequests}/> }/>
                        <Route path='/matching/:request_id' element={<Matching myRequests={myRequests}/> }/>
                        <Route path='/request-detail/:request_id' element={<RequestDetail myRequests={myRequests}/> }/>
                    </Routes>

                </div>
            </>

    );
}
