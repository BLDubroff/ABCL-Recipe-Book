import { useContext , useEffect} from 'react'
import './Navbar.css'
import AccountButton from './NavbarButtons/AccountButton'
import HomeButton from './NavbarButtons/HomeButton'
import SearchBar from './NavbarButtons/SearchBar'
import ServerContext from '../Features/ServerContext'
import AccountContext from '../Features/AccountContext'
import AddRecipeButton from './NavbarButtons/AddRecipeButton'

function Navbar() {

    const { setLoggedIn, setUserId, setUsername } = useContext(AccountContext);
    const { serverURL } = useContext(ServerContext);

    useEffect(() => {
        fetch(`${serverURL}/users/session`, {
          method: 'POST',
          mode: 'cors',
          headers: {
              "Content-Type": "application/json",
          },
          credentials: 'include'
      })
          .then(res => res.json())
          .then(body => {
              if (body.user_id) {
                  setLoggedIn(true)
                  setUserId(body.user_id)
                  setUsername(body.username)
              } else {
                  console.log('Login failed')
              }
          })
      }, [])

    return (
        <div id="navbar">
            <HomeButton />
            <SearchBar />
            <AddRecipeButton />
            <AccountButton />
        </div>
    )

}

export default Navbar