import { useContext } from "react"
import AccountContext from "../Features/AccountContext"

function UserProfile() {

    const {username} = useContext(AccountContext);

    return (
        <h3>{username}</h3>
    )

}

export default UserProfile