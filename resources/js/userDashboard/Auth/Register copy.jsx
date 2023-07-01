import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

export default function Register(props) {

    const [values, setValues] = useState({
        email: '',
        // name: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
        userType: '',
        tag:'',
        languages: [],
        selectedLanguages: []
    });

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
 
    // const handleChange = (event) => {
    //     setValues(previous_values => {
    //         return ({...previous_values,
    //             [event.target.name]: event.target.value
    //         });
    //     });
    // }
    const handleChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'checkbox') {
            const ischecked = event.target.checked;
            setValues((prevValues) => ({
                ...prevValues,
                selectedLanguages: ischecked
                ?[...prevValues.selectedLanguages,value]
                :prevValues.selectedLanguages.filter((lang) => lang !== value)
            }));
        } else {
                setValues((prevValues) => ({
                    ...prevValues,
                        [name]: value
                    }));
        };
    }

    const handleUserTypeChange = (event) => {
        setValues(prevValues => ({
          ...prevValues,
          userType: event.target.checked ? 'translator' : '', selectedLanguages:[]//clear the selected languages when the user type changes
        }));
      };
    
 
    return (
    <>
        <form action="/register" method="post" onSubmit={ handleSubmit }>
            <div className="inputbox">
                <p>Are you a translator?</p>
                <input
                    type="checkbox"
                    name="translator"
                    value="translator"
                    onChange={handleUserTypeChange}
                    checked={values.userType === 'translator'}
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
                    value={"values.password"}
                    onChange={ handleChange }
                    required 
                />

                <br />
                
                {values.userType === 'translator' && (
                <>
                    <label htmlFor="tag">Tag</label>
                    <input
                        type="text"
                        name="tag"
                        value={values.tag}
                        onChange={handleChange}
                        required
                    />
                    <option value={null}>Select tag(s)</option>
                        {values.tags.map((tag) => (
                            <option 
                                key={tag.id} 
                                value={tag.tag_name}>
                                {tag.tag_name}
                            </option>
                        ))}
            
                    <label htmlFor="selectedLanguages">Language</label>
                    <select
                        name="selectedLanguages"
                        value={values.selectedLanguages}
                        onChange={handleChange}
                        multiple
                        required
                    >
                        <option value={null}>Select language(s)</option>
                        {values.languages.map((language) => (
                            <option 
                                key={language.id} 
                                value={language.language_name}>
                                {language.language_name}
                            </option>
                        ))}
                        {/* { values.languages.map((language) => (
                            <option 
                                key={language.id} 
                                value={language.language_name}>{language.language_name}
                            </option>
                        ))} */}
                        
                    </select>
                 
                </>
            )}
          
            </div>
            <br />
            <button type="submit" className="btn">Register</button>

        </form>
    
    </>
    )
}