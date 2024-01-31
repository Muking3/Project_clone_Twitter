import { Link } from "react-router-dom"
import { AccountName, AccountSrc } from "../Account/Account"

export function TweetTitle({ userId, verified, users }) {
    return (
        <Link to={`/Project_clone_Twitter/username/${userId}`}>
            <div className='flex-items-center'>
                <AccountName nameProfil={users.name} access={verified} />
                <AccountSrc idProfil={users.username} access={true} classe='px-1' />
            </div>
        </Link>
    )
}