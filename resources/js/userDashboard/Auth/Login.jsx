import { useState, useContext } from 'react';
import './Login.css';
import Context from "../Context";
import axios from 'axios';

export default function Login(props) {

    const { dispatch } = useContext(Context)
 
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
 
    const handleSubmit = async (event) => {
 
        event.preventDefault();

        try {
            const response = await axios.post('/login', values);

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
        <div className="auth">
            <form action="/login" method="post" onSubmit={ handleSubmit }>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={ values.email } 
                    onChange={ handleChange } 
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={ values.password } 
                    onChange={ handleChange } 
                    />
    
                <button className='btn'>Login</button>
    
            </form>
        </div>
    );
}