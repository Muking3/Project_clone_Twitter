import axios from "axios"

export const fetchData = async ({ setRestweet, setProfil, setComment }) => {
    try {
        const [tweetsRes, profileRes, commentRes, commentProfil] = await Promise.all([
            axios.get("https://my-json-server.typicode.com/amare53/twiterdb/posts/"),
            axios.get("https://my-json-server.typicode.com/amare53/twiterdb/users"),
            axios.get("https://my-json-server.typicode.com/amare53/twiterdb/comments"),
            axios.get("https://my-json-server.typicode.com/amare53/twiterdb/comments?postId=3")
        ]);
        const tweets = tweetsRes.data.map(tweet => {
            const comment = commentRes.data.filter(message => message.postId == tweet.userId).length
            return {
                ...tweet,
                "replies": comment,
            }
        })
        setRestweet(tweets);
        setProfil(profileRes.data);
        setComment(commentProfil.data.length)
    } catch (error) {
        console.error("Problème de connexion", error);
    }
};
