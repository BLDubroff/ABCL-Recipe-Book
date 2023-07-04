import React, { useContext, useState, useEffect } from "react";
import ShowRecipe from "./recipes/showRecipe";
import axios from "axios";
import ServerContext from "../Features/ServerContext";
import Button from "react-bootstrap/Button";
import "../Pages/recipes/show.css";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { serverURL } = useContext(ServerContext);

  useEffect(() => {
    const retrieveRecipes = async () => {
      setLoading(true);
      const res = await axios.get(`${serverURL}/recipes`);
      setRecipes(res.data);
      setLoading(false);
    };
    retrieveRecipes();
  }, [serverURL]);

  return (
    <div>
      {loading ? "Loading" : ""}
      {recipes.map((recipe) => ShowRecipe(recipe))}
    </div>
  );
}
