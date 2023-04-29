import { Link } from "react-router-dom"

function UserProfile(props) {

    return (
        <h3>
            <Link to='/profile'>
                User: {props.username}
            </Link>
        </h3>
    )


}

export default UserProfile