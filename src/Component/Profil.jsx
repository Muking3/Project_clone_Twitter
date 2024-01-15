import Account_follow from "./Account_follow"
import { ex_tweet } from "./Exemple_tweet"
import Show_more from "./Show_more"
import Tweet from "./Tweet"

export default function Profil() {
    const filter_tweet = ex_tweet.filter(x => x.id[0] === "M")
    return (
        <>
            <div className='w-[47%] border-x-[1px] border-[#2F3336]'>
                <p className='font-bold text-[20px] border-b-[1px] border-[#2F3336] p-[16px] bg-black'>Profil</p>
                <div className="absolute z-10 mt-[250px] ml-[20px]">
                    <img src="https://github.com/Muking3/Project_clone_Twitter/blob/develop/src/assets/voqA4xci_400x400.png?raw=true" alt="Photo de profil" className="rounded-[100%] 
                border-[5px] border-black w-[150px] h-[150px]"/>
                </div>
                <img src="https://github.com/Muking3/Project_clone_Twitter/blob/develop/src/assets/james-harrison-vpOeXr5wmR4-unsplash.jpg?raw=true" alt="Image d'un ordinateur portable avec du code z-0" />
                <div className="w-11/12 m-auto pt-24">
                    <h3 className='text-xl font-extrabold'>Muking</h3>
                    <p className="text-[13px] text-[#6E767D]">Muking00#</p>
                    <p className="text-[13px] text-[#6E767D]">Joined January 2050</p>
                    <p className="text-[13px] text-[#6E767D]">5 Following 0 Followers</p>
                </div>
                <div className='border-y border-[#2F3336] mt-7'>
                        <h3 className='py-7 ml-[16px] text-xl font-extrabold'>You might like</h3>
                        <Account_follow img="src/assets/image 1 (1).svg" name="New York Times" profil="nytimes"/>
                        <Account_follow img="src/assets/image 1.svg"  name="CNN" profil="CNN"/>
                        <Account_follow img="src/assets/Profile-Photo.svg"  name="Twitter" profil="Twitter"/>
                        <Show_more />
                    </div>
                <ul>{
                    filter_tweet.map(tweet => <Tweet key={tweet.id} name_profil={tweet.source} id_profil={tweet.author_name}
                        text={tweet.text} src_imgpst={tweet.image} src_profil={tweet.author_avatar}
                        replie={tweet.replies} retweet={tweet.retweets} favorite={tweet.favorites} verified={tweet.isVerified} />)
                }</ul>
            </div >
        </>
    )
}
