import { useContext, useRef } from "react"
import AccountContext from "../Features/AccountContext"
import { useNavigate } from "react-router-dom"

function LoginForm() {

    const navigate = useNavigate();

    const {setLoggedIn, setUsername} = useContext(AccountContext)

    const username = useRef('')
    const password = useRef('')

    const handleSubmit = (e, username) => {
        e.preventDefault();
        setLoggedIn(true);
        setUsername(username);
        navigate('/')
    }

    return (
        <form>
            <label htmlFor="username">Username: </label>
            <input ref={username} id="username" name="username" type="text" />
            <label htmlFor="password">Password</label>
            <input ref={password} id="password" name="password" type="text" />
            <button onClick={(e) => handleSubmit(e, username.current.value)}>Log in</button>
        </form>
    )
}

export default LoginForm