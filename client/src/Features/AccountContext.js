import { createContext } from "react";

const AccountContext = createContext({
    loggedIn: false,
    setLoggedIn: (input) => {},
    username: '',
    setUsername: (input) => {}
})

export default AccountContext