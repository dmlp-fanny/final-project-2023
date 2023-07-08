import axios from "axios"
import { useEffect, useState } from "react"
import TranslatorsCard from "./TranslatorsCard/TranslatorsCard"

export default function Matching ( { currentRequest_id } ) {

    const [translators, setTranslators] = useState(null)

    const loadTranslators = async () => {
        try {
            const response = await axios.get(`/api/translators/matching/${currentRequest_id}`)
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
        {
            translators && translators.map((translator, i) => <TranslatorsCard key={i} currentRequest_id={currentRequest_id} translator={translator} />)
        }
        </div>
    )
}