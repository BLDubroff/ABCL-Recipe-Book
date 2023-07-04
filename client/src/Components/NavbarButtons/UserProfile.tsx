import { Link } from "react-router-dom"

interface UserProfileProps {
    username: string;
}

function UserProfile(props: UserProfileProps) {

    return (
        <h3>
            <Link to='/profile'>
                User: {props.username}
            </Link>
        </h3>
    )


}

export default UserProfile