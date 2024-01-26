import { Link } from "react-router-dom"
import { Account_img, Account_src } from "../Account"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
export function TweetPhoto({ userId }) {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({})
    useEffect(() => {
        try {
            axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/${userId}`).then(res => {
                setUser(res.data);
                setIsLoading(false);
            })
        } catch (error) {
            setIsLoading(false);
            console.error("Probleme de connexion");
        }
    }, [])
    if (isLoading) {
        return <span>Loading...</span>
    }
    return (
        <Link to={`/Project_clone_Twitter/${userId}`} className="w-8% h-8%">
            <img src={user.profil} alt="Photo" className='rounded-full' />
        </Link>
    )
}