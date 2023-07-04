import React, { useContext, useState, useEffect } from "react";
import ShowRecipe from "./recipes/showRecipe";
import axios from "axios";
import ServerContext from "../Features/ServerContext";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { serverURL } = useContext(ServerContext);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const retrieveRecipes = async () => {
      setLoading(true);
      const res = await axios.get(
        `${serverURL}/recipes/search/?${searchParams.toString()}`
      );
      setRecipes(res.data);
      setLoading(false);
    };
    retrieveRecipes();
  },  [searchParams, serverURL]);

  return (
    <div>
      {loading ? "Loading" : ""}
      {recipes.map((recipe) => ShowRecipe(recipe))}
    </div>
  );
}
