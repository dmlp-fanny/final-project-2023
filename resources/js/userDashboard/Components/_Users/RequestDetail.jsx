import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function RequestDetail () {

    const { request_id } = useParams();

    const [myRequest, setMyRequest] = useState(null)

    const loadRequestDetail = async () => {
        const response = await axios.get(`/api/requests/${request_id}`)
        setMyRequest(response.data)
        console.log(response.data);
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
                    {
                        myRequest.status === 1 ? 'Confirmed' :
                        <Link to={"/dashboard/requests/matching/" + request_id} > Matched Translators </Link>
                    }
                </>
                
                : "Not found"
            }
        </div>
    )
}