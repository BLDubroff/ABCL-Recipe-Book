import React, { useContext, useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ServerContext from "../../Features/ServerContext";

const EditRecipe = () => {

  const title = useRef('');
  const description = useRef('');
  const content = useRef('');
  const cookTime = useRef();
  const prepTime = useRef();
  const servings = useRef();
  const tags = useRef('');
  
  const { serverURL } = useContext(ServerContext);
  const { recipe_id } = useParams();

  const [recipe_data, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const retrieveRecipe = async () => {
        setLoading(true);
        const res = await axios.get(`${serverURL}/recipes/${recipe_id}`);
        const recipe_info = {
          user_id: res.data.user_id,
          title: res.data.title,
          description: res.data.description,
          recipe_content: res.data.recipe_content,
          prep_time_in_minutes: res.data.prep_time_in_minutes,
          cook_time_in_minutes: res.data.cook_time_in_minutes,
          servings: res.data.servings,
          tags: res.data.tags.join(' '),
        }
        setRecipe(recipe_info);
        setLoading(false);
      };
      retrieveRecipe();
  }, []);

  const handleEdit = (e, recipeInfo) => {

    e.preventDefault();

    fetch(`${serverURL}/recipes/${recipe_id}`, {
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
      <h2> Edit Recipe </h2>
      <form>
        <div>
          <label htmlFor='title'>Title: </label>
          <input
            ref={title}
            type="text"
            id="title"
            name="title"
            defaultValue={recipe_data.title}
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
            defaultValue={recipe_data.description}
          />
        </div>
        <div>
          <label htmlFor="content">Recipe: </label>
          <input
          ref={content}
            type="text"
            id="content"
            name="content"
            defaultValue={recipe_data.recipe_content}
          />
        </div>
        <div>
          <label htmlFor="prep-time">Prep Time: </label>
          <input
            ref={prepTime}
            type="number"
            id="prep-time"
            name="prep-time"
            defaultValue={recipe_data.prep_time_in_minutes}
          />

          <label htmlFor="cook-time">Cook Time: </label>
          <input
            ref={cookTime}
            type="number"
            id="cook-time"
            name="cook-time"
            defaultValue={recipe_data.cook_time_in_minutes}
          />

        </div>
        <div>
          <label htmlFor="servings">Servings: </label>
          <input
            ref={servings}
            type="number"
            id="servings"
            name="servings"
            defaultValue={recipe_data.servings}
          />
        </div>
        <div>
          <label htmlFor="tags">Tags: </label>
          <input 
            ref={tags}
            type="text"
            id="tags"
            name="tags"
            defaultValue={recipe_data.tags}
          />
        </div>
        
        <div>
          <button type="submit" onClick={(e) => handleEdit(
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

export default EditRecipe