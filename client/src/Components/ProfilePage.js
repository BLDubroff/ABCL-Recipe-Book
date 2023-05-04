import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import AccountContext from "../Features/AccountContext"
import ServerContext from "../Features/ServerContext";

function ProfilePage() {

    const navigate = useNavigate();

    const { loggedIn, setLoggedIn, username, user_id } = useContext(AccountContext);
    const { serverURL } = useContext(ServerContext)

    const handleLogOut = () => {
        fetch(`${serverURL}/users/logout/${user_id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        })
            .then(res => res.json())
            .then(body => {
                console.log(body)
            })

        setLoggedIn(false)

        navigate('/')
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate('/');
        }
    })
    
    return (
        <>

            <h2>{username}</h2>

            <button onClick={handleLogOut}>Log out</button>

        </>
    )
}

export default ProfilePage