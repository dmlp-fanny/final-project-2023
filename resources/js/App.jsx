import { useEffect, useReducer, useState } from "react";
import reducer from "./userDashboard/Context/reducer";
import state from "./userDashboard/Context/state";
import axios from "axios";
import UserDashboard from "./userDashboard/UserDashboard";
import Context from "./userDashboard/Context";
import "../css/app.css";
import Login from "./userDashboard/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./userDashboard/Auth/Register";
// import SuccessMessages from "./userDashboard/Components/SuccessMessages/SuccessMessages";

function App() {
    const [context, dispatch] = useReducer(reducer, state);

    // const [successMessage, setSuccessMessage] = useState(null)

    // const [showPopup, setShowPopup] = useState(true);

    const loadUser = async () => {
        try {
            const response = await axios.get("/api/user");
            if (Math.floor(response.status / 100) !== 2) {
                dispatch({
                    type: "user/set",
                    payload: null,
                });
            } else {
                dispatch({
                    type: "user/set",
                    payload: response.data,
                });

                // setSuccessMessage('Succesfully logged in.')

            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <Context.Provider value={{ context, dispatch }}>
            <BrowserRouter>
                {/* {showPopup ? <SuccessMessages setShowPopup={setShowPopup} successMessage={successMessage}/> : <></>} */}
                <Routes>
                    <Route path="/dashboard/*" element={ context.user ? (<UserDashboard loadUser={loadUser}/>) : (<Login loadUser={loadUser} />)} />
                    <Route path="/register" element={<Register loadUser={loadUser}/>} />
                    <Route path="/login" element={<Login loadUser={loadUser}/>} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
