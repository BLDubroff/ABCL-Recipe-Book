import { Link } from "react-router-dom";

function HomeButton() {
    return (
        <h1>
            <Link style={{textDecoration:'none', color: 'black'}} to={'/'}>
                ABCL Recipe Book
            </Link>
        </h1>
    )
}

export default HomeButton