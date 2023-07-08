import { Link } from "react-router-dom";

export default function PostRequestsBtn () {

    return (
        <div className="postRequestsBtn">
            <Link to="post-request" > Post a New Request </Link>
        </div>
    )
}