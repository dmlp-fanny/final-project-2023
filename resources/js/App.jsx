import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './userDashboard/Components/Navigation/Navigation'
import Dashboard from './userDashboard/Components/Dashboard/Dashboard'
import Profile from './userDashboard/Components/Profile/Profile'
import { useEffect, useReducer, useState } from 'react';
import reducer from './userDashboard/Context/reducer'
import Context from './userDashboard/Context/index'
import state from './userDashboard/Context/state'
import Register from './userDashboard/Auth/Register';
import Requests from './userDashboard/Components/Requests/Requests';
import axios from 'axios';


function App() {

  const [context, dispatch] = useReducer(reducer, state);

  const loadUser = async () => {
        try {
            const response = await axios.get("/api/user/");
            dispatch({
              type: 'user/set',
              payload: response.data
            })
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

  return (
    <Context.Provider value = { {context, dispatch} } >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/dashboard' element={ <Dashboard />}></Route>
          <Route path='/dashboard/profile' element={ < Profile/>}></Route>
          <Route path='/dashboard/requests' element={ <Requests />}></Route>
          <Route path='/dashboard/register' element={ < Register />}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
