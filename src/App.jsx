import './App.css'
import Sidebar from './Component/Sidebar'
import Timeline from './Component/Timeline'
import Trends from './Component/Trends'

export default function App() {
  return (
    <>
      <div className='flex max-w-[1265px] h-vh m-auto'>
        <Sidebar />
        <Timeline />
        <Trends />
      </div>
    </>
  )
}