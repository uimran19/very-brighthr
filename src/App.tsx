import './App.css'
import './components/Home'
import Home from './components/Home'
import EmployeesPage from './components/EmployeesPage'
import EmployeeProfilePage from './components/EmployeeProfilePage'
import Sidebar from './components/Sidebar'
import 'tailwindcss'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div id='layout' className='min-h-[100vh] grid grid-cols-[200px_1fr]'>
      <Sidebar />
      <main className='px-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/employees' element={<EmployeesPage />} />
          <Route path='/employee/:name' element={<EmployeeProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
