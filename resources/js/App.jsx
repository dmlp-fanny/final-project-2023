import { useEffect, useReducer } from 'react';
import reducer from './userDashboard/Context/reducer'
import state from './userDashboard/Context/state'
import axios from 'axios';
import UserDashboard from './userDashboard/UserDashboard';
import Context from './userDashboard/Context';
import Register from './userDashboard/Auth/Register';
import '../css/app.css'

function App() {

  const [context, dispatch] = useReducer(reducer, state);

  const loadUser = async () => {
        try {
            const response = await axios.get("/api/user/");
            if (Math.floor(response.status / 100) !== 2) {
              dispatch({
                  type: 'user/set',
                  payload: null
              })
            } else {
              dispatch({
                  type: 'user/set',
                  payload: response.data
              })
          }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    useEffect(() => {
        if (context.user === false) {
            loadUser()
        }
    }, [context.user]);
 
  return (
    <Context.Provider value={{ context, dispatch }}>
      {
        context.user ? <UserDashboard /> : <Register />
      }
    </Context.Provider>
  )
}

export default App
