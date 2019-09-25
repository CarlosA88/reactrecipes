import React from "react";
import RecipesDetails from "../recipes/RecipesDetails.jsx";
import RecipesList from "../recipes/RecipesList.jsx";
const Home = () => {
  return (
    <div style={{display:'flex'}}>
      {" "}
      <RecipesList />
      <RecipesDetails />
     
    </div>
  );
};

export default Home;
