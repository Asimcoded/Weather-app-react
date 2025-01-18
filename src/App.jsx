import './index.css'
import SideBar from './components/SideBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import Setting from './components/pages/Setting'
import { useEffect } from 'react'
import fetchData from './fetchData'
import SearchBar from './components/SearchBar'
function App() {
  // useEffect(() => {
  //   fetchData("Mumbai").then(data=>{
  //     console.log(data);
  //   })
  // }, [])
  return (
    <div className='h-screen p-[30px] grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-[20px]'>
      <SideBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  )
}

export default App
