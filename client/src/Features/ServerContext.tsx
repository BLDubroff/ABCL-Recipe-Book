import { createContext } from "react";

const ServerContext = createContext({
    serverURL: process.env.REACT_APP_SERVER_URL
})

export default ServerContext