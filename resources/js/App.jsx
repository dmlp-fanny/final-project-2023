import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './userDashboard/Components/Navigation/Navigation'
import Dashboard from './userDashboard/Components/Dashboard/Dashboard'
import Profile from './userDashboard/Components/Profile/Profile'


function App() {

  return (

      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path='/dashboard' element={ <Dashboard />}></Route>
            <Route path='/dashboard/profile' element={ < Profile/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
