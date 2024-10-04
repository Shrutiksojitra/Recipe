import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Spaghetti', ingredients: 'Pasta, Tomato, Basil', instructions: 'Boil pasta...', cuisine: 'Italian', cookingTime: 30 },
    { id: 2, title: 'Chicken Curry', ingredients: 'Chicken, Spices, Onion', instructions: 'Cook chicken...', cuisine: 'Indian', cookingTime: 45 },
  ]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleSelectRecipe = (recipe) => {
    setIsAddingNew(false);
    setIsEditing(false);
    setSelectedRecipe(recipe);
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
    setSelectedRecipe(null);
  };

  const handleEditRecipe = (recipe) => {
    setIsEditing(true);
    setSelectedRecipe(recipe);
  };

  const handleSaveRecipe = (newRecipe) => {
    if (newRecipe.id) {
      setRecipes(recipes.map(recipe => recipe.id === newRecipe.id ? newRecipe : recipe));
    } else {
      setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
    }
    setIsEditing(false);
    setIsAddingNew(false);
    setSelectedRecipe(null);
  };

  const handleAddNewRecipe = () => {
    setIsAddingNew(true);
    setIsEditing(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Management</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <RecipeList
            recipes={recipes}
            selectRecipe={handleSelectRecipe}
            onAddNew={handleAddNewRecipe}
          />
        </div>
        <div className="col-span-2">
          {isAddingNew ? (
            <RecipeForm recipe={null} saveRecipe={handleSaveRecipe} />
          ) : isEditing ? (
            <RecipeForm recipe={selectedRecipe} saveRecipe={handleSaveRecipe} />
          ) : (
            <RecipeDetail
              recipe={selectedRecipe}
              handleDelete={handleDeleteRecipe}
              handleEdit={handleEditRecipe}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
