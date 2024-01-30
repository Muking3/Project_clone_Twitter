import { createContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import './App.css'
import Sidebar from './Component/Sidebar'
import Trends from './Component/Trends'
import axios from "axios"

export const TweetContext = createContext()
export default function App() {
  // let { id } = useParams();
  const [res_tweet, setRes_tweet] = useState([])
  const [profil, setProfil] = useState([])
  // useEffect(() => {
  //   try {
  //     axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts/").then(res => setRes_tweet(res.data))
  //   } catch (error) {
  //     console.error("Probleme de connexion");
  //   }
  // }, [])
  // useEffect(() => {
  //   try {
  //     axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users/").then(res => setProfil(res.data))
  //   } catch (error) {
  //     console.error("Probleme de connexion");
  //   }
  // }, [])
  // const updateContextValue = (newValue) => {
  //   setRes_tweet(newValue);
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tweetsRes, usersRes] = await Promise.all([
          axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts/"),
          axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users")
        ]);

        setRes_tweet(tweetsRes.data);
        setProfil(usersRes.data);
      } catch (error) {
        console.error("Problème de connexion", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TweetContext.Provider value={{ res_tweet, setRes_tweet, profil, setProfil }}>
        <div className='flex flex-col tablet:flex-row max-w-[1265px] h-vh m-auto'>
          <Sidebar />
          <Trends />
        </div>
      </TweetContext.Provider>
    </>
  )
}
