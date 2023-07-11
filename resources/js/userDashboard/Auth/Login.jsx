import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Login(props) {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/login", values);
            if (response) {
                props.loadUser() 
            }

            navigate('/dashboard')

        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    setErrors(error.response.data.errors);
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
        }
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <div className="auth">
            <div className="form-login">
                <h1>Login</h1>
                <form action="/login" method="post" onSubmit={handleSubmit}>
                    <div className="inputbox">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {
                        errors['email']
                        ? errors['email'].map(error => <div className="error">{ error }</div>)
                        : ''
                        }

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {
                        errors['password']
                        ? errors['password'].map(error => <div className="error">{ error }</div>)
                        : ''
                        }
                    </div>
                    
                    <button className="btn">
                        Login
                    </button>

                    <div className="register">
                        <p>
                            Don't have an account? <Link to={"/register"}>Sign up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
