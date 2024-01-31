import { Link } from "react-router-dom"

export function TweetPhoto({ userId, users }) {
    return (
        <Link to={`/Project_clone_Twitter/username/${userId}`} className="w-8% h-8%">
            <img src={users.profil} alt="Photo" className='rounded-full' />
        </Link>
    )
}