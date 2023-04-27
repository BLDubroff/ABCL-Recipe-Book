import { Link } from "react-router-dom"

function LoginButton() {

    return (
        <h3>
            <Link to={'/login'}>
                Log in/Sign up
            </Link>
        </h3>

    )

}

export default LoginButton