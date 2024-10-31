import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App.jsx";
import React from "react";

test('As a Chef, I want to store my receipes so that I can keep track of them.', () => {
  //1. Render the landing page
  render(<App/>)
  //2. Wait for the page to load
  // Implied in this case, nothing to wait for

  //3. Then I should see a heading that reads "My Recipes"
  let recipeHeader = screen.getByText('My Recipes');
  expect(recipeHeader).toBeInTheDocument();
  
  //4. And I should see text beneath the heading that reads "There are no recipes to list"
  let recipeList = screen.getByText('There are no recipes to list.');
  expect(recipeList).toBeInTheDocument();

});

