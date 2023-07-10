import axios from "axios";
import { useEffect, useState } from "react";

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
        // const newLanguageData = [...languageData]
        // const currentLanguage = newLanguageData[index]
        languageData = {...languageData, 
            [event.target.name]: event.target.value}
        
        // setLanguageData(languageData);
        setLanguageData(previous_values => {
            const previousCopy = [...previous_values]
            previousCopy[index] = {...previous_values[index], 
            [event.target.name]: event.target.value}
            return previousCopy
            // return ({...previous_values, 
            // [event.target.name]: event.target.value})
        })
    }
    return (
        <>
 <label htmlFor="from_language">From</label>
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

                        <label htmlFor="to_language">To</label>
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
        </>
    );
}
