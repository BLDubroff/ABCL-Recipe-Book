import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const EditRecipe = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recipeContent, setContent] = useState("");
  const [cookTime, setCookTime] = useState(0);
  const [prepTime, setPrepTIme] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [servings, setServings] = useState(0);


  const { handleAdd } = props;

  useEffect(() => {
    axios.put(`http://localhost:3001/recipes`).then((response) => {
      setTitle(response.data);
    });
  });
  return (
    <div>
      <div>
        <h2> Edit Recipe </h2>
        <form>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Recipe Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input placeholder="Picture" id="pic" name="pic" />
          </div>
          <div>
            <p>Description</p>
            <input
              type="text"
              name="name"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <p>Recipe</p>
            <input
              type="text"
              name="name"
              placeholder="recipeContent"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <p>Preparation Time</p>
            <input
              type="integer"
              name="name"
              placeholder="Preparation Time"
              onChange={(e) => setPrepTIme(e.target.value)}
            />
            <input
              type="integer"
              name="name"
              placeholder="Cook Time"
              onChange={(e) => setCookTime(e.target.value)}
            />
            <input
              type="integer"
              name="name"
              placeholder="Total Time"
              onChange={(e) => setTotalTime(e.target.value)}
            />
          </div>
          <div>
            <input
              type="integer"
              name="name"
              placeholder="Servings"
              onChange={(e) => setServings(e.target.value)}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="breakfast"
              name="lunch"
              value="breakfast"
            />
            Breakfast
            <input type="checkbox" id="lunch" name="lunch" value="lunch" />
            Lunch
            <input type="checkbox" id="dinner" name="lunch" value="dinner" />
            Dinner
            <input type="checkbox" id="snack" name="lunch" value="snack" />
            Snack
            <input type="checkbox" id="dessert" name="lunch" value="dessert" />
            Dessert
          </div>

          <div>
            <button type="submit" onClick={() => handleAdd}>
              Submit
            </button>
          </div>
        </form>
      </div>
     
    </div>
  );
};
export default EditRecipe;