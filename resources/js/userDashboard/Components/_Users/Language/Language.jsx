import axios from "axios";
import { useEffect, useState } from "react";
import './Language.scss';

export default function Language( {languageData, setLanguageData, index} ) {
    
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        axios.get('/api/languages')
      .then(response => {
        const languages = response.data;
        setLanguages(languages)
      })
      .catch(error => {
        console.log('Error fetching languages:', error);
      });
    }, []);


    const handleLanguageSelection = (event) => {

        languageData = {...languageData, 
            [event.target.name]: event.target.value}
        
        setLanguageData(previous_values => {
            const previousCopy = [...previous_values]
            previousCopy[index] = {...previous_values[index], 
            [event.target.name]: event.target.value}
            return previousCopy

        })
    }
    return (
        <>
        <strong>Language competence #{index + 1}</strong>
        <div className="competence">
            <div className="competence_input_group">
                
                {/* <label htmlFor="from_language">Language 1</label> */}
                <select
                    name="from_language"
                    value={languageData.from_language}
                    onChange={handleLanguageSelection}
                    required
                >
                    
                    <option value={null}>Select a language</option>
                    {
                        languages.map(language => {
                            return <option 
                                    key={language.id} 
                                    value={language.id}
                                    >
                                    {language.language_name}
                                    </option>
                            })
                    }
                </select>
            </div>
            <section>↔</section>   
            <div className="competence_input_group">
                {/* <label htmlFor="to_language">Language 2</label> */}
                <select
                    name="to_language"
                    value={languageData.to_language}
                    onChange={handleLanguageSelection}
                    required
                    
                >
                    <option value={null}>Select a language</option>
                    {
                        languages.map(language => {
                            return <option 
                                    key={language.id} 
                                    value={language.id}
                                    >
                                    {language.language_name}
                                    </option>
                            })
                    }
                </select>
            </div>
        </div>
        </>
    );
}
