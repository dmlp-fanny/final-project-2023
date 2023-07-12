import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import Tag from "./Tag/Tag";
import Matching from "./Matching/Matching";


export default function RequestDetail ({myRequests}) {

    const { request_id } = useParams();

    const [myRequest, setMyRequest] = useState(null)
    const [showDetails, setShowDetails] = useState(null)

    const loadRequestDetail = async () => {
        const response = await axios.get(`/api/requests/${request_id}`)
        setMyRequest(response.data)
    }

    useEffect(() => {
        loadRequestDetail()
    }, [])

    return (
        <div className="request-detail">
            {
                myRequest ? 
                <>
                    <h2>{myRequest.title}</h2>
                    <p><strong>Description: </strong>{myRequest.description}</p>
                    <p><strong>Date: </strong>{myRequest.date}</p>
                    <p><strong>Time: </strong>{myRequest.from_time}</p>
                    {myRequest.tags.map((tag) => (
                        <Tag key={tag.id} tag={tag}/>
                    ))}
                    {
                        myRequest.status === 1 ? <p><strong>Status:</strong> Confirmed</p>:
                        <>
                        {/* <Link to={"/dashboard/requests/matching/" + request_id} > Matched Translators </Link> */}
                            <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide Matched Translators" : "Show Matched Translators"}</button>
                            
                            {showDetails ?
                                <Matching myRequests={myRequests}/> : <></>
                            }
                        </>
                    }

                    

                    
                </>
                : "Not found"
            }
        </div>
    )
}