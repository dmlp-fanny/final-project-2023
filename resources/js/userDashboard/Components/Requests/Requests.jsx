import { useContext } from "react"
import Context from "../../Context"
import PostRequests from "../Users/PostRequests/PostRequests";
import ViewRequests from "../Translators/ViewRequests";

export default function Requests () {
    const { context: {user} } = useContext(Context);

    return (
        <>
        {
            user ? user.translator ? <ViewRequests /> : <PostRequests /> : ''
        }
        </>
    )
}