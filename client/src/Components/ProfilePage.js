import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountContext from "../Features/AccountContext";
import ServerContext from "../Features/ServerContext";
import Button from "react-bootstrap/Button";

function ProfilePage() {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn, username, user_id } =
    useContext(AccountContext);
  const { serverURL } = useContext(ServerContext);

  const handleLogOut = () => {
    fetch(`${serverURL}/users/logout/${user_id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
      });

    setLoggedIn(false);

    navigate("/");
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  });

  return (
    <div style={{ textAlign: "center", margin: "20px", padding: "30px" }}>
      <h2>{username}</h2>

      <Button variant="secondary" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
}

export default ProfilePage;
