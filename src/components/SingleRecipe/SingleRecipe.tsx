import React, { useContext } from "react";

import { SingleRecipeTemplate } from "./SingleRecipeTemplate";

// Contexts
import { ThemeContext } from "../../contexts/ThemeContext";

// EXAMPLE RECIPE OBJECT
// Title: "Ice Cream Sundae"
// Description: "A delicious ice cream and banana snack!"
// ingredients: "pepper, eggs, milk, red pepper"
// instructions: "Preheat so you can cook idiot"
// tags: "tasty, dessert, delicious"
// recipeID: 1234

type SingleRecipeProps = {
  AllRecipes: any;
  RecipeID: string;
};

const SingleRecipe = ({ AllRecipes, RecipeID }: SingleRecipeProps) => {
  const { isLightTheme, theme } = useContext(ThemeContext);
  const LocalTheme = isLightTheme ? theme.light : theme.dark;

  // If a recipe exists, find it and return it
  if (RecipeID !== null) {
    const FoundRecipe = AllRecipes.find((e: any) => e.recipeID === RecipeID);

    return <SingleRecipeTemplate Recipe={FoundRecipe} />;
  } else {
    // If no recipe exists, return placeholder
    return (
      <section>
        <h1
          className="has-text-weight-bold is-size-4 has-text-centered"
          style={{ color: LocalTheme.syntax }}
        >
          No recipe selected
        </h1>
      </section>
    );
  }
};

export default SingleRecipe;
