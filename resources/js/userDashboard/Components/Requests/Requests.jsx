import { useContext } from "react"
import Context from "../../Context"
import PostRequests from "../_Users/PostRequests/PostRequests";
import ViewRequests from "../_Translators/ViewRequests";

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