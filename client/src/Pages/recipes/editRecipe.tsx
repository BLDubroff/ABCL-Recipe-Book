import React, { useContext, useRef, useState, useEffect, FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ServerContext from "../../Features/ServerContext";

interface RecipeData {
  user_id: string;
  title: string;
  description: string;

  recipe_content: string;
  prep_time_in_minutes: number;
  cook_time_in_minutes: number;
  servings: number;
  tags: string;
}

const EditRecipe: React.FC = () => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLInputElement>(null);
  const cookTime = useRef<HTMLInputElement>(null);
  const prepTime = useRef<HTMLInputElement>(null);
  const servings = useRef<HTMLInputElement>(null);
  const tags = useRef<HTMLInputElement>(null);

  const { serverURL } = useContext(ServerContext);
  const { recipe_id } = useParams<{ recipe_id: string }>();
  const navigate = useNavigate();

  const [recipe_data, setRecipe] = useState<RecipeData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retrieveRecipe = async () => {
      setLoading(true);
      const res = await axios.get(`${serverURL}/recipes/show/${recipe_id}`);
      const recipe_info: RecipeData = {
        user_id: res.data.user_id,
        title: res.data.title,
        description: res.data.description,
        recipe_content: res.data.recipe_content,
        prep_time_in_minutes: res.data.prep_time_in_minutes,
        cook_time_in_minutes: res.data.cook_time_in_minutes,
        servings: res.data.servings,
        tags: res.data.tags.join(' '),
      };
      setRecipe(recipe_info);
      setLoading(false);
      if (title.current) title.current.value = recipe_info.title;
      if (description.current) description.current.value = recipe_info.description;
      if (content.current) content.current.value = recipe_info.recipe_content;
      if (cookTime.current) cookTime.current.value = String(recipe_info.cook_time_in_minutes);
      if (prepTime.current) prepTime.current.value = String(recipe_info.prep_time_in_minutes);
      if (servings.current) servings.current.value = String(recipe_info.servings);
      if (tags.current) tags.current.value = recipe_info.tags;
    };
    retrieveRecipe();
  }, [recipe_id, serverURL]);

  const handleEdit = (e: React.MouseEvent, recipeInfo: RecipeData) => {
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
        navigate('/')
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
          />
        </div>
        <div>
          <label htmlFor="content">Recipe: </label>
          <input
            ref={content}
            type="text"
            id="content"
            name="content"
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
          <button type="submit" onClick={(e) => handleEdit(
            e, {
              title: title.current?.value || '',
              description: description.current?.value || '',
              recipe_content: content.current?.value || '',
              cook_time_in_minutes: Number(cookTime.current?.value),
              prepTime: Number(prepTime.current?.value),
              servings: Number(servings.current?.value),
              tags: tags.current?.value || '',
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