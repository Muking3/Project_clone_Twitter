import { useContext, useEffect, useState } from "react";

export default function ProfilClick({ userId }) {
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
    return 
}