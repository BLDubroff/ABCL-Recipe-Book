import { useContext, useRef } from "react"
import AccountContext from "../Features/AccountContext"
import { useNavigate } from "react-router-dom"

function LoginForm() {

    const navigate = useNavigate();

    const {setLoggedIn, setUsername} = useContext(AccountContext)

    const username = useRef('')

    const handleSubmit = (e, username) => {
        e.preventDefault();
        setLoggedIn(true);
        setUsername(username);
        navigate('/')
    }

    return (
        <form>
            <input ref={username} type="text" />
            <button onClick={(e) => handleSubmit(e, username.current.value)}>Log in</button>
        </form>
    )
}

export default LoginForm