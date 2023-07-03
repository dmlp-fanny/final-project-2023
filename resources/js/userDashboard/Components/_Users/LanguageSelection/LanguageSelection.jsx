import axios from "axios";
import { useEffect, useState } from "react";

export default function LanguageSelection( {from_language, to_language, handleInputValues} ) {
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


    return (
        <>
 <label htmlFor="from_language">From</label>
                        <select
                            name="from_language"
                            value={from_language}
                            onChange={handleInputValues}
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
                            value={to_language}
                            onChange={handleInputValues}
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
