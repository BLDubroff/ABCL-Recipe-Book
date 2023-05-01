import React from "react";

const  ShowRecipe = (recipe_data) => {
  return (
    <div>
      <div>
        <h4> Recipe</h4>
        <h1>{recipe_data.title}</h1>
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
          Preparation Time
          {recipe_data.prep_time_minutes}, Cook Time{recipe_data.cook_time_minutes},
          Total time{recipe_data.total_time_minutes},
        </p>
        <div>
          <p>
            Servings
            {recipe_data.servings}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowRecipe;
