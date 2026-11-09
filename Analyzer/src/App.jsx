import { Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Analyzer from './pages/Analyzer'
import { Toaster} from 'react-hot-toast'
import Login from './Components/Login'
import Signup from './Components/Signup'
import About from './pages/About'

function App() {
  

  return (
    <>
      
      <Toaster position='top-center'></Toaster>
        <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />}></Route>
       </Routes>
       <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
       </Routes>
       <Routes>
        <Route path="/analyzer" element={<Analyzer />}></Route>
       </Routes>
       
       <Routes>
        <Route path="/about" element={<About />}></Route>
       </Routes>
       <Routes>
        <Route path="/login" element={<Login />}></Route>
       </Routes>
       <Routes>
        <Route path="/signup" element={<Signup />}></Route>
       </Routes>


      
    </>
  )
}

export default App
