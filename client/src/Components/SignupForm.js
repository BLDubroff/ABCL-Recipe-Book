import AccountContext from "../Features/AccountContext";
import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import ServerContext from "../Features/ServerContext";

function SignupForm() {

    const navigate = useNavigate();

    const { setLoggedIn, setUsername } = useContext(AccountContext);
    const { serverURL } = useContext(ServerContext);

    const username = useRef('')
    const password = useRef('')

    const handleSubmit = async (e, username, password) => {
        e.preventDefault();

        const userInfo = JSON.stringify({username: username, password: password})

        fetch(`${serverURL}/users`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: userInfo,
        })
            .then((res) => {
                console.log(res)
                setLoggedIn(true);
                setUsername(username);
                navigate('/')
            })

    }

    return (
        <>
            <h2>Sign up</h2>
            <form>
                <label htmlFor="username">Username: </label>
                <input ref={username} id="username" name="username" type="text" />
                <label htmlFor="password">Password</label>
                <input ref={password} id="password" name="password" type="text" />
                <button onClick={(e) => handleSubmit(e, username.current.value, password.current.value)}>Sign up</button>
            </form>
        </>
    )
}

export default SignupForm