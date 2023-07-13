import axios from 'axios';
import Select from "react-select";
import { useEffect, useState } from 'react';

export default function TagsSelection ( {selectedTags, setSelectedTags} ) {
    const [tags, setTags] = useState([]);
    
    const loadTags = async () => {
        try {
            const response = await axios.get('/api/tags')
            setTags(response.data.map(tag => {
                return {value: tag.id, label: tag.tag_name}
            }))
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        loadTags()
    }, [])

    const handleSelectingTags = (data) => {
        setSelectedTags(data)
    }

    return (

        <Select options={tags} name='tags' placeholder='Select the category..' defaultValue={selectedTags} onChange={handleSelectingTags} isSearchable={true} isMulti/>

    )
}