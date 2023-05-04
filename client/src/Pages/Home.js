import React, { useContext } from "react";
import ShowRecipe from "./recipes/showRecipe";
import { useState, useEffect } from "react";
import axios from "axios";
import ServerContext from "../Features/ServerContext";
import Button from "react-bootstrap/Button";
import "../Pages/recipes/show.css";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
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
  }, []);

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Button variant="outline-secondary" href="/addRecipe">
          Add Recipe
        </Button>
      </div>
      <div className="cardContainer">
        {loading ? "Loading" : ""}

        {recipes.map((recipe) => ShowRecipe(recipe))}
      </div>
    </div>
  );
}
