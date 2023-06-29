import React, { useState, useEffect, useContext } from 'react';

export default function Register() {

    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    })
 
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
 
    return (
        <form action="/register" method="post" onSubmit={ handleSubmit }>
 
            <input type="text" name="name" value={ values.name } onChange={ handleChange } />
 
            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
 
            <input type="password" name="password" value={ values.password } onChange={ handleChange } />
 
            <input type="password" name="password_confirmation" value={ values.password_confirmation } onChange={ handleChange } />
 
            <button>Register</button>
 
        </form>
    );
}