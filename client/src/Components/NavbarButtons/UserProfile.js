import { Link } from "react-router-dom"
import './Navbarbuttons.css'

function UserProfile(props) {

    return (
        <h3>
            <Link className="userName" to='/profile'>
                User: {props.username}
            </Link>
        </h3>
    )


}

export default UserProfile