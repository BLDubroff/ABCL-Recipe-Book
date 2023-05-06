import { Link } from "react-router-dom";
import "./Navbarbuttons.css";
import Button from "react-bootstrap/Button";

function UserProfile(props) {
  return (
    <h3 className="logBtns">
      <Link className="userName" to="/profile">
        <Button variant="outline-secondary">User: <strong>{props.username}</strong> </Button>
      </Link>
      {/* <div style={{ textAlign: "right" }}> */}
      <Button className="addbtn" variant="outline-secondary" href="/addRecipe">
        Add Recipe
      </Button>
      {/* </div> */}
    </h3>
  );
}

export default UserProfile;
