import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './userDashboard/Components/Navigation/Navigation'
import Dashboard from './userDashboard/Components/Dashboard/Dashboard'
import Profile from './userDashboard/Components/Profile/Profile'
import { useReducer } from 'react';
import reducer from './userDashboard/Context/reducer'
import Context from './userDashboard/Context/index'
import state from './userDashboard/Context/state'
import Register from './userDashboard/Auth/Register';


function App() {

  // const [context, dispatch] = useReducer(reducer, state);

  return (
    // <Context.Provider values = { {context, dispatch} } >
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path='/dashboard' element={ <Dashboard />}></Route>
            <Route path='/dashboard/profile' element={ < Profile/>}></Route>
            {/* <Route path='/dashboard/register' element={ < Register />}></Route> */}
          </Routes>
      </BrowserRouter>
    // </Context.Provider>
  )
}

export default App
