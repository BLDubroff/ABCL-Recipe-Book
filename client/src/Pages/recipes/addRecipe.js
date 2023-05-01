import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import ServerContext from "../../Features/ServerContext";

const AddRecipe = (props) => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [recipeContent, setContent] = useState("");
  // const [cookTime, setCookTime] = useState(0);
  // const [prepTime, setPrepTIme] = useState(0);
  // const [totalTime, setTotalTime] = useState(0);
  // const [servings, setServings] = useState(0);

  const title = useRef('');
  const description = useRef('');
  const content = useRef('');
  const cookTime = useRef();
  const prepTime = useRef();
  const servings = useRef();
  const tags = useRef('');
  
  const { serverURL } = useContext(ServerContext)

  //const { handleAdd } = props;

  // useEffect(() => {
  //   axios.get(`${serverURL}/recipes`).then((response) => {
  //     setTitle(response.data);
  //   });
  // });

  const handleAdd = (e, recipeInfo) => {

    e.preventDefault();

    fetch(`${serverURL}/recipes`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeInfo),
  })
      .then((res) => {
          console.log(res)
      })
  }

  return (
    <div>
      <h2> Add Recipe </h2>
      <form>
        <div>
          <label for='title'>Title: </label>
          <input
            ref={title}
            type="text"
            id="title"
            name="title"
            placeholder="Recipe Name"
          />
        </div>
        <div>
          <input placeholder="Picture" id="pic" name="pic" />
        </div>
        <div>
          <label for='description'>Description: </label>
          <input
            ref={description}
            type="text"
            id="description"
            name="name"
            placeholder="Description"
          />
        </div>
        <div>
          <label for="content">Recipe: </label>
          <input
          ref={content}
            type="text"
            id="content"
            name="content"
            placeholder="Recipe content"
          />
        </div>
        <div>
          <label for="prep-time">Prep Time: </label>
          <input
            ref={prepTime}
            type="number"
            id="prep-time"
            name="prep-time"
          />

          <label for="cook-time">Cook Time: </label>
          <input
            ref={cookTime}
            type="number"
            id="cook-time"
            name="cook-time"
          />

        </div>
        <div>
          <label for="servings">Servings: </label>
          <input
            ref={servings}
            type="number"
            id="servings"
            name="servings"
          />
        </div>
        <div>
          <label for="tags">Tags: </label>
          <input 
            ref={tags}
            type="text"
            id="tags"
            name="tags"
          />
        </div>
        
        <div>
          <button type="submit" onClick={(e) => handleAdd(
            e, {
              title: title.current.value,
              description: description.current.value,
              content: content.current.value,
              cookTime: cookTime.current.value,
              prepTime: prepTime.current.value,
              servings: servings.current.value,
              tags: tags.current.value
            }
          )}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddRecipe;
