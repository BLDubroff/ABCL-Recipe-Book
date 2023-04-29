import './Navbar.css'
import AccountButton from './NavbarButtons/AccountButton'
import HomeButton from './NavbarButtons/HomeButton'
import SearchBar from './NavbarButtons/SearchBar'

function Navbar() {

    return (
        <div id="navbar">
            <HomeButton />
            < SearchBar />
            <AccountButton />
        </div>
    )

}

export default Navbar