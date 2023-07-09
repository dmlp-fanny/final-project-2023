import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import './Register.css';
import TagsSelection from "../Components/_Users/TagsSelection/TagsSelection";
import TimeTable from "./TimeTable";
import { useNavigate } from 'react-router-dom';

export default function Register({ loadUser }) {

    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        experience: '',
        password: '',
        password_confirmation: '',
        location: '',
        from_language: '',
        to_language: '',
        isTranslator: '',
    });

    const [selectedTags, setSelectedTags] = useState([])
    const [languages, setLanguages] = useState([])
    const [isTranslator, setIsTranslator] = useState(false)
    const [scheduleData, setScheduleData] = useState([])

    const navigate = useNavigate()

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

    const handleSubmit = async (event) => {
 
        event.preventDefault();

        try {
            const response = await axios.post('/register', {...values, selectedTags, scheduleData });
            if (response) {
                loadUser()
            }
            navigate('/dashboard')

     
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
    }
 
    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value,
                isTranslator: isTranslator
            });
        });
    }

    const handleUserTypeChange = (event) => {
        setIsTranslator(!isTranslator);
      };
    
 
    return (
    <div className='auth'>
        <form className="form-signup" action="/register" method="post" onSubmit={ handleSubmit }>
            <div className="inputbox">
                <h3>SIGNUP FORM</h3>

                <label htmlFor="first_name">First name</label>
                <input 
                    type="text" 
                    name="first_name" 
                    value={values.first_name}
                    onChange={ handleChange }
                    required 
                />
                
                <br /> 
                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="text" 
                    name="last_name" 
                    value={values.last_name}
                    onChange={ handleChange }
                    required 
                />
                
                <br />
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    value={values.email}
                    onChange={ handleChange }
                    required 
                />

                <br />
                <label htmlFor="phone_number">Phone number</label>
                <input 
                    type="text" 
                    name="phone_number" 
                    value={values.phone_number}
                    onChange={ handleChange }
                    required 
                />
                
                <br />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange={ handleChange }
                    required 
                />

                <br/>
                <label htmlFor="password">Password confirmation</label>
                <input type="password" name="password_confirmation" value={ values.password_confirmation } onChange={ handleChange } />

                <br />
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    name="location" 
                    value={values.location}
                    onChange={ handleChange }
                     
                />
                <br />
                <label htmlFor="picture">Profile picture</label>
                <input 
                    type="url" 
                    name="picture" 
                    value=""
                    onChange={ handleChange }
                />

                <br />
                <p>Are you a translator?</p>
                
                <input
                    type="checkbox"
                    name="translator"
                    value={isTranslator}
                    onChange={handleUserTypeChange}
                />
                <br />
                
                {isTranslator ? 
                    <>
                        <TagsSelection setSelectedTags={ setSelectedTags }/>
                        
                            <br />
                            <label htmlFor="from_language">From</label>
                            <select
                                name="from_language"
                                value={values.from_language}
                                onChange={handleChange}
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
                                value={values.to_language}
                                onChange={handleChange}
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
                            <br />
                            <label htmlFor="experience">Experience</label>
                            <textarea name="experience" cols="50" rows="10" value={values.experience} onChange={ handleChange } />

                            <TimeTable setScheduleData={ setScheduleData } />
                             
                    </> : ''
                    
                }
            </div>
            <br />
            <button className="btn-signup">Sign up</button>

        </form>
    </div>
    )
}