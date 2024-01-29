import { Link } from "react-router-dom"
import { Account_img, Account_src } from "../Account"
import { useContext, useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import { ProfilContext } from "../Sidebar";
import { TweetContext } from "../../App";

export function TweetTitle({ userId, verified, users }) {
    return (
        <Link to={`/Project_clone_Twitter/${userId}`}>
            <div className='flex-items-center'>
                <Account_img name_profil={users.name} access={verified} />
                <Account_src id_profil={users.username} access={true} classe='px-1' />
            </div>
        </Link>
    )
}