import { useContext } from "react";
import Context from "../../../Context";
import PostRequests from "../PostRequests/PostRequests";
import PostRequestsBtn from "../PostRequestsBtn/PostRequestsBtn";
import axios from "axios";

export default function UserRequests() {
    const {context: { user }} = useContext(Context);

    const loadMyRequests = async () => {
        const response = await axios.get('/api/requests')
    }

    return (
   
            <>
                <div className="requests_view">
                    <PostRequests />
                </div>
                <div className="requests_sideMenu">
                    <PostRequestsBtn />
                    <div className="emptydivs"></div>
                    <div className="emptydivs"></div>
                    <div className="emptydivs"></div>
                    <div className="emptydivs"></div>
                </div>
            </>

    );
}
