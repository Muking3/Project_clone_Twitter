import { Link } from "react-router-dom"
import { Account_img, Account_src } from "../Account"
import { useContext, useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import { ProfilContext } from "../Sidebar";
export function TweetPhoto({ userId, users }) {
    return (
        <Link to={`/Project_clone_Twitter/${userId}`} className="w-8% h-8%">
            <img src={users.profil} alt="Photo" className='rounded-full' />
        </Link>
    )
}