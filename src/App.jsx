import './App.css'
import Sidebar from './Component/Sidebar'
import Trends from './Component/Trends'

export default function App() {
  return (
    <>
      <div className='flex max-w-[1265px] h-vh m-auto'>
        <Sidebar />
        <Trends />
      </div>
    </>
  )
}