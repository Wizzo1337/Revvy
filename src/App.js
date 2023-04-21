import './App.css'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='/login' element={[<Login />]} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
