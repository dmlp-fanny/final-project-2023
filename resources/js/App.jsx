import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './userDashboard/Components/Navigation/Navigation'
import Dashboard from './userDashboard/Components/Dashboard/Dashboard'
import '../css/style.scss'

function App() {
  


  return (

      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path='/dashboard' element={ <Dashboard />}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
