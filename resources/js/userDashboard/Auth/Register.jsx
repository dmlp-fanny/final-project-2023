import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./Register.css";
import TagsSelection from "../Components/_Users/TagsSelection/TagsSelection";
import TimeTable from "./TimeTable";
import { useNavigate } from "react-router-dom";
import Language from "../Components/_Users/Language/Language";

export default function Register({ loadUser }) {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        experience: "",
        password: "",
        password_confirmation: "",
        location: "",
        from_language: "",
        to_language: "",
        isTranslator: false,
    });

    const [selectedTags, setSelectedTags] = useState([]);
    const [scheduleData, setScheduleData] = useState([]);
    const [languageData, setLanguageData] = useState([
        {
            from_language: null,
            to_language: null,
        },
    ]);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/register", {
                ...values,
                selectedTags,
                scheduleData,
                languageData,
            });
            if (response) {
                loadUser();
            }
            navigate("/dashboard");
            
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
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

    const handleUserTypeChange = (event) => {
        const newValues = { ...values };
        newValues.isTranslator = !newValues.isTranslator;
        setValues(newValues);
    };

    const handleAddingAnotherLanguage = () => {
        setLanguageData((previous_object) => {
            return [
                ...previous_object,
                {
                    from_language: null,
                    to_language: null,
                },
            ];
        });
    };

    return (
        <div className="auth">
            <form
                className="form-signup"
                action="/register"
                method="post"
                onSubmit={handleSubmit}
            >
                <div className="inputbox">
                    <h3>SIGNUP FORM</h3>

                    <label htmlFor="first_name">First name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        required
                    />

                    <br />
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        required
                    />

                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />

                    <br />
                    <label htmlFor="phone_number">Phone number</label>
                    <input
                        type="text"
                        name="phone_number"
                        value={values.phone_number}
                        onChange={handleChange}
                        required
                    />

                    <br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />

                    <br />
                    <label htmlFor="password">Password confirmation</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                    />

                    <br />
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={values.location}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="picture">Profile picture</label>
                    <input
                        type="url"
                        name="picture"
                        value=""
                        onChange={handleChange}
                    />

                    <br />
                    <div>
                        <p>Are you a translator?</p>

                        <input
                            type="checkbox"
                            name="translator"
                            value={values.isTranslator}
                            onChange={handleUserTypeChange}
                        />
                    </div>
                    <br />

                    {values.isTranslator ? (
                        <>
                            <TagsSelection setSelectedTags={setSelectedTags} />

                            <br />
                            {languageData.map((competence, i) => (
                                <Language
                                    key={i}
                                    languageData={competence}
                                    index={i}
                                    setLanguageData={setLanguageData}
                                />
                            ))}

                            <br />

                            <button className="btn-signup" onClick={handleAddingAnotherLanguage}>
                                Add another Languages
                            </button>

                            <br />
                            <label htmlFor="experience">Experience</label>
                            <textarea
                                name="experience"
                                cols="50"
                                rows="10"
                                value={values.experience}
                                onChange={handleChange}
                            />

                            <TimeTable setScheduleData={setScheduleData} />
                        </>
                    ) : (
                        ""
                    )}
                </div>
                <br />
                <button className="btn-signup">Sign up</button>
            </form>
        </div>
    );
}
