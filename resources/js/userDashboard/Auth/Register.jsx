import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

export default function Register(props) {

    const [values, setValues] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        tag:'',
        languages: '',
        from_language: '',
        to_language: '',
        tags: '',
    });

    const [isTranslator, setIsTranslator] = useState(false)

    useEffect(() => {
        axios.get('/api/languages')
      .then(response => {
        const languages = response.data;
        setValues(prevValues => ({ ...prevValues, languages }));
      })
      .catch(error => {
        console.log('Error fetching languages:', error);
      });
    }, []);
    
    useEffect(() => {
        axios.get('/api/tags')
      .then(response => {
        const tags = response.data;
        setValues(prevValues => ({ ...prevValues, tags }));
      })
      .catch(error => {
        console.log('Error fetching tags:', error);
      });
    }, []);

    const handleSubmit = async (event) => {
 
        event.preventDefault();

        try {
            const response = await axios.post('/register', values);
            const response_data = response.data;
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
                [event.target.name]: event.target.value
            });
        });
    }

    const handleUserTypeChange = () => {
        setIsTranslator(!isTranslator);
      };
    
 
    return (
    <>
        <form action="/register" method="post" onSubmit={ handleSubmit }>
            <div className="inputbox">
                <p>Are you a translator?</p>
                <input
                    type="checkbox"
                    name="translator"
                    value={isTranslator}
                    onChange={handleUserTypeChange}
                />
                <br />

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
                <label htmlFor="phonenumber">Phone number</label>
                <input 
                    type="text" 
                    name="phonenumber" 
                    value={values.phonenumber}
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

                <br />
                <label htmlFor="location">Location</label>
                <input 
                    type="location" 
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
                    required
                />

                <br />
                
                {isTranslator ? 
                    <>
                        <label htmlFor="tag">Tag</label>
                        <select
                            name="tag"
                            value={values.tag}
                            onChange={handleChange}
                            required
                        >
                        <option value={null}>Select tag(s)</option>
                            {
                            values.tags.map((tag) => (
                                <option 
                                    key={tag.id} 
                                    value={tag.tag_name}>
                                    {tag.tag_name}
                                </option>
                            ))
                            }
                        </select>
                        <label htmlFor="from_language">From</label>
                        <select
                            name="from_language"
                            value={values.from_language}
                            onChange={handleChange}
                            required
                            
                        >
                           
                            <option value={null}>Select a language</option>
                            {
                                values.languages.map(language => {
                                    return <option 
                                            key={language.id} 
                                            value={language.language_name}
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
                                values.languages.map(language => {
                                    return <option 
                                            key={language.id} 
                                            value={language.language_name}
                                            >
                                            {language.language_name}
                                            </option>
                                    })
                            }
                        </select>

                    </> : ''
                }

            </div>
           
            <br />
            <button className="btn">Register</button>

        </form>
    </>
    )
}