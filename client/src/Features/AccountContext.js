import { createContext } from "react";

const AccountContext = createContext({
  loggedIn: false,
  setLoggedIn: (input) => {},
  user_id: null,
  setUserId: (input) => {},
  username: "",
  setUsername: (input) => {},
});

export default AccountContext;
