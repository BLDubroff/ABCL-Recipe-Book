import './Navbar.css'
import AccountButton from './AccountButton'
import HomeButton from './HomeButton'

function Navbar() {

    return (
        <div id="navbar">
            <HomeButton />
            <h2>Search Bar</h2>
            <AccountButton />
        </div>
    )

}

export default Navbar