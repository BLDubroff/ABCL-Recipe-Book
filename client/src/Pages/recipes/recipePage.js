import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServerContext from "../../Features/ServerContext";
import axios from "axios";
import "./show.css";
import Button from "react-bootstrap/Button";

const RecipePage = () => {
  const { serverURL } = useContext(ServerContext);
  const { recipe_id } = useParams();

  const [recipe_data, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retrieveRecipe = async () => {
      setLoading(true);
      const res = await axios.get(`${serverURL}/recipes/show/${recipe_id}`);
      setRecipe(res.data);
      setLoading(false);
    };
    retrieveRecipe();
  }, []);

  const handleDelete = (e) => {

    e.preventDefault();

    fetch(`${serverURL}/recipes/${recipe_id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          "Content-Type": "application/json",
      },
      credentials: 'include'
    })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className="container" key={recipe_data.recipe_id}>
      <div>
        <h1>{recipe_data.title}</h1>
        <h2>By: {recipe_data.author ? recipe_data.author.username : ''}</h2>
      </div>
      <div>
        <img src={recipe_data.img} alt={recipe_data.name} />
      </div>
      <div>
        <h2>{recipe_data.description}</h2>
      </div>
      <div>
        <p>{recipe_data.recipe_content}</p>
      </div>
      <div>
        <p>
          {" "}
          Preparation Time:
          {recipe_data.prep_time_in_minutes}, Cook Time:{" "}
          {recipe_data.cook_time_in_minutes}, Total time:{" "}
          {recipe_data.total_time_in_minutes},
        </p>
        <div>
          <p>
            Servings:
            {recipe_data.servings}
          </p>
          <div className="editBtn">
            <Button variant="outline-secondary" href={`/editRecipe/${recipe_data.recipe_id}`}>Edit</Button>
          </div>
          <Button
                className="deleteBtn"
                type="submit"
                variant="outline-danger"
                value="Delete Recipe"
                onClick={handleDelete}
              >Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
