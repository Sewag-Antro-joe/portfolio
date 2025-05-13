
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Router,Route,Link} from 'react-router-dom'
import Home from './home'
import Profile from './profile'
import Contact from './contact'
import Project from './project'
import Skill from './skill'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div>
    {/* <Link to="/">home</Link>
      <Link to="/login">login</Link> */}
      </div>
      <Routes>
      <Route exact path='/Skill' element={<Skill/>}/>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Profile' element={<Profile/>}/>

      <Route exact path='/Project' element={<Project/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
