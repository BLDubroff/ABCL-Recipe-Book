import React from "react";
import ShowRecipe from "./recipes/showRecipe";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setRecipes = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/recipes");
      setRecipes(res.data);
      setLoading(false);
    };
    setRecipes();
  }, []);
  return (
    <div>
      <div>
        <h1> RECIPE BOOK </h1>
      </div>
      <ShowRecipe />
    
    </div>
  );
}
