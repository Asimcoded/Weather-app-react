import './index.css'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Setting from './components/pages/Setting'
function App() {
  return (
    <div className='h-screen p-[30px] flex'>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  )
}

export default App
