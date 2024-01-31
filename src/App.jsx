import { createContext, useEffect, useState } from 'react'
import './App.css'
import Trends from './Component/Trends/Trends'
import Sidebar from './Component/Sidebar/Sidebar'
import Loading from './Component/ComponentGeneral/Loading'
import { fetchData } from './Component/ComponentGeneral/CallAPI'

export const TweetContext = createContext()

export default function App() {
  const [restweet, setRestweet] = useState([])
  const [profil, setProfil] = useState([])
  const [comment, setComment] = useState([])
  useEffect(() => {
    fetchData({ setRestweet, setProfil, setComment });
  }, []);
  if (profil.length === 0) {
    return (<Loading />)
  }
  return (
    <>
      <TweetContext.Provider value={{ restweet, setRestweet, profil, setProfil, comment, setComment }}>
        <div className='flex flex-col tablet:flex-row max-w-[1265px] h-vh m-auto'>
          <Sidebar />
          <Trends />
        </div>
      </TweetContext.Provider>
    </>
  )
}