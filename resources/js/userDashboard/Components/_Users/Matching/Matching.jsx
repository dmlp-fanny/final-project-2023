import axios from "axios"
import { useEffect, useState } from "react"
import TranslatorsCard from "../TranslatorsCard/TranslatorsCard"
import './Matching.scss'
import { useParams } from "react-router-dom"

export default function Matching ( {myRequests} ) {

    const [translators, setTranslators] = useState(null)

    const { request_id } = useParams()

    const myRequest = myRequests && myRequests.find((myRequest) => {
        return myRequest.id == request_id
    });

    const interactedWith = myRequest && myRequest.potential_translators.map((translator) => translator.translator_id)

    console.log(interactedWith);
 
    const loadTranslators = async () => {
        try {
            const response = await axios.get(`/api/translators/matching/${request_id}`)
            setTranslators(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadTranslators()
    }, [])
    
    return (
        <div className="translators-list">
            <h4>Matched translators:</h4>
        
            {
                translators?.length > 0 ? translators.map((translator, i) => <TranslatorsCard key={i} request_id={request_id} translator={translator} interactedWith={interactedWith && interactedWith.includes(translator.id)} />) 
                :
                "No translators matched your criteria"
            }
        </div>
    )
}