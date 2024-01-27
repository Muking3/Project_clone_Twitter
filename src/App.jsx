import { createContext, useEffect, useState } from 'react'
import './App.css'
import Sidebar from './Component/Sidebar'
import Trends from './Component/Trends'
import axios from "axios"

export const TweetContext = createContext()
export default function App() {
  const [res_tweet, setRes_tweet] = useState([])
  useEffect(() => {
    try {
      axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts/").then(res => setRes_tweet(res.data))
    } catch (error) {
      console.error("Probleme de connexion");
    }
  }, [])
  // const updateContextValue = (newValue) => {
  //   setRes_tweet(newValue);
  // };
  return (
    <>
      <TweetContext.Provider value={{res_tweet, setRes_tweet}}>
        <div className='flex flex-col tablet:flex-row max-w-[1265px] h-vh m-auto'>
          <Sidebar />
          <Trends />
        </div>
      </TweetContext.Provider>
    </>
  )
}