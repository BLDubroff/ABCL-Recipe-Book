import { useContext, useEffect } from "react"
import AccountContext from "../Features/AccountContext"
import { useNavigate } from "react-router-dom";

function ProfilePage() {

    const navigate = useNavigate();

    const {loggedIn, setLoggedIn, username} = useContext(AccountContext);

    const handleLogOut = (e) => {
        setLoggedIn(false);
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