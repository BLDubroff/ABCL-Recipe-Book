import { useContext, useEffect } from "react";
import AccountContext from "../../Features/AccountContext";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";

function AccountButton() {

    const {loggedIn, username} = useContext(AccountContext);

    return (
        <>
            {loggedIn ?
                UserProfile({username}) :
                LoginButton()
            }
        </>
    )

}

export default AccountButton