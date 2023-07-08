
import { useContext } from "react";

import Context from "../../../Context";

export default function UsersHome() {

    const { context: {user}} = useContext(Context)

    return (


                <PendingRequests />
        
    );
}
