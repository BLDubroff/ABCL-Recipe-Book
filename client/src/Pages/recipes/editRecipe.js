import React, { useContext, useEffect, useRef } from "react";

import ServerContext from "../../Features/ServerContext";


const EditRecipe = (props) => {

  const title = useRef('');
  const description = useRef('');
  const content = useRef('');
  const cookTime = useRef();
  const prepTime = useRef();
  const servings = useRef();
  const tags = useRef('');
  
  const { serverURL } = useContext(ServerContext)



  const handleAdd = (e, recipeInfo) => {

    e.preventDefault();

    fetch(`${serverURL}/recipes`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
          "Content-Type": "application/json",
      },
      credentials: 'include',
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
          <label htmlFor='title'>Title: </label>
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
          <label htmlFor='description'>Description: </label>
          <input
            ref={description}
            type="text"
            id="description"
            name="name"
            placeholder="Description"
          />
        </div>
        <div>
          <label htmlFor="content">Recipe: </label>
          <input
          ref={content}
            type="text"
            id="content"
            name="content"
            placeholder="Recipe content"
          />
        </div>
        <div>
          <label htmlFor="prep-time">Prep Time: </label>
          <input
            ref={prepTime}
            type="number"
            id="prep-time"
            name="prep-time"
          />

          <label htmlFor="cook-time">Cook Time: </label>
          <input
            ref={cookTime}
            type="number"
            id="cook-time"
            name="cook-time"
          />

        </div>
        <div>
          <label htmlFor="servings">Servings: </label>
          <input
            ref={servings}
            type="number"
            id="servings"
            name="servings"
          />
        </div>
        <div>
          <label htmlFor="tags">Tags: </label>
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
export default EditRecipe;