import { useContext } from "react";
import AccountContext from "../Features/AccountContext";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";

function AccountButton() {

    const {loggedIn} = useContext(AccountContext);

    return (
        <>
            {loggedIn ?
                UserProfile() :
                LoginButton()
            }
        </>
    )

}

export default AccountButton