import { useContext, useRef } from "react"
import AccountContext from "../Features/AccountContext"
import { useNavigate } from "react-router-dom"

const serverURL = process.env.REACT_APP_SERVER_URL

function LoginForm() {

    const navigate = useNavigate();

    const {setLoggedIn, setUserId, setUsername} = useContext(AccountContext)

    const username = useRef('')
    const password = useRef('')

    const handleSubmit = (e, username, password) => {
        e.preventDefault()

        const userInfo = JSON.stringify({
            username: username, 
            password: password
        })

        fetch(`${serverURL}/users/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: userInfo,
        })
            .then(res => res.json())
            .then(body => {
                if (body.user_id) {
                    setLoggedIn(true)
                    setUserId(body.user_id)
                    setUsername(body.username)
                    navigate('/')
                } else {
                    console.log('Login failed')
                }
            })
    }

    const testCookies = () => {
        fetch(`${serverURL}/users/test`, {
            method: 'POST',
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
    }

    return (
        <>
            <form>
                <label htmlFor="username">Username: </label>
                <input ref={username} id="username" name="username" type="text" />
                <label htmlFor="password">Password</label>
                <input ref={password} id="password" name="password" type="text" />
                <button onClick={(e) => handleSubmit(e, username.current.value, password.current.value)}>Log in</button>
            </form>
            <button onClick={testCookies}>TEST COOKIES</button>
        </>

    )
}

export default LoginForm