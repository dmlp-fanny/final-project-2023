import axios from "axios"
import { useContext, useEffect, useState } from "react";
import Context from "../../../Context";
import PendingRequestCard from "./PendingRequestCard";

export default function PendingRequests ({pendingRequests}) {


    return (
       <div className="pending_requests">
        {
            pendingRequests && pendingRequests.map(request => <PendingRequestCard key={request.id} pendingRequest={request} />)
        }
       </div>
    )
}