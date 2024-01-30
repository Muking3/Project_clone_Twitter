import { createContext, useEffect, useState } from 'react'
import './App.css'

import Trends from './Component/Trends/Trends'
import axios from "axios"
import Sidebar from './Component/Sidebar/Sidebar'

export const TweetContext = createContext()

export default function App() {
  const [restweet, setRestweet] = useState([])
  const [profil, setProfil] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tweetsRes, profileRes] = await Promise.all([
          axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts/"),
          axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
        ]);

        setRestweet(tweetsRes.data);
        setProfil(profileRes.data);
      } catch (error) {
        console.error("Problème de connexion", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TweetContext.Provider value={{ restweet, setRestweet, profil, setProfil }}>
        <div className='flex flex-col tablet:flex-row max-w-[1265px] h-vh m-auto'>
          <Sidebar />
          <Trends />
        </div>
      </TweetContext.Provider>
    </>
  )
}