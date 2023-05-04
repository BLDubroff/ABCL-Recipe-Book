import { Link } from "react-router-dom";

function AddRecipeButton() {
    return (
        <h1>
            <Link style={{textDecoration:'none', color: 'black'}} to={'/addRecipe'}>
                Add a Recipe
            </Link>
        </h1>
    )
}

export default AddRecipeButton