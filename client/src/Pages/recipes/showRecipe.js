import React from "react";
import { Link } from "react-router-dom";

const  ShowRecipe = (recipe_data) => {
  return (
    <div key={recipe_data.recipe_id}>
      <div>
        <Link to={`/recipe/${recipe_data.recipe_id}`}>
          <h1>{recipe_data.title}</h1>
        </Link>
        <h2>{recipe_data.author.username}</h2>
      </div>
      <div>
        <img src={recipe_data.img} alt={recipe_data.name} />
      </div>
      <div>
        <h2>{recipe_data.description}</h2>
      </div>
      <div>
        <p>
          {" "}
          Preparation Time:
          {recipe_data.prep_time_in_minutes}, Cook Time: {recipe_data.cook_time_in_minutes},
          Total time: {recipe_data.total_time_in_minutes},
        </p>
        <div>
          <p>
            Servings:
            {recipe_data.servings}

          </p>
        </div>
       
      </div>
    </div>
  );
}

export default ShowRecipe;
