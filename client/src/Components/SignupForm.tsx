import AccountContext from "../Features/AccountContext";
import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import ServerContext from "../Features/ServerContext";


function SignupForm() {

    const navigate = useNavigate();

    const { setLoggedIn, setUsername, setUserId } = useContext(AccountContext);
    const { serverURL } = useContext(ServerContext);

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent, username: string, password: string) => {
        e.preventDefault()

        const userInfo = JSON.stringify({
            username: username, 
            password: password
        })

        fetch(`${serverURL}/users`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: userInfo,
        })
            .then(res => res.json())
            .then(body => {
                if (body) {
                    setLoggedIn(true)
                    setUserId(body.user_id)
                    setUsername(body.username)
                    navigate('/')
                } else {
                    body.errors.forEach((err: any) => {
                        console.log(`ERROR TYPE - ${err.type}: ${err.message}`)
                    })
                }

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
                <button onClick={(e) => handleSubmit(e, username.current?.value || '', password.current?.value || '')}>Sign up</button>
            </form>
        </>
    )
}

export default SignupForm