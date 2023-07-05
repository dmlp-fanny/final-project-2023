import axios from "axios"
import { useEffect, useState } from "react"
import TranslatorsCard from "./TranslatorsCard/TranslatorsCard"

export default function Matching () {

    const [translators, setTranslators] = useState(null)
    const [request, setRequest] = useState(null)

    const loadTranslators = async () => {
        try {
            const response = await axios.get('/api/translators')
            setTranslators(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const loadRequest = async () => {
        try {
            const response = await axios.get('/api/requests/' + requestId)
            setTranslators(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadTranslators()
        loadRequest()
    }, [])
    
    return (
        <div className="translators-list">
        {
            translators && translators.map((translator, i) => <TranslatorsCard key={i} translator={translator} />)
        }
        </div>
    )
}