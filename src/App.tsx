import './App.css'
import './components/Home'
import Home from './components/Home'
import EmployeesPage from './components/EmployeesPage'
import Sidebar from './components/Sidebar'
import 'tailwindcss'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div id='layout' className='min-h-[100vh] grid grid-cols-[200px_1fr]'>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/employees' element={<EmployeesPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
