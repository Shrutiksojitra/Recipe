import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Meggi', ingredients: 'wheat flour, palm oil, salt, wheat gluten, calcium carbonate, potassium chloride, sodium phosphate, potassium carbonate, sodium carbonate, guar gum', instructions: 'In a pan take 1.5 cup water and boil it then add MAGGI 2 min noodles and masala in boiling water and cook for 5 min. at low flame. On other side boil peas and potatoes together in a pressure cooker for 5 to 7 min. or 2-3 whistles.', cuisine: 'Italian', cookingTime: 2 },
    { id: 2, title: 'Passta', ingredients: 'semolina, durum flour, farina flour, corn, rice, wheat, or any combination of these, with water', instructions: 'Boil 6 cups water in a large pot or a deep pan and bring it to boil over medium flame. When it comes to rolling boil, add dried noodles, 1/2 tablespoon oil and 1/2 teaspoon salt. Boil until noodles are soft, it will take around 4-5 minutes. Stir occasionally in between.', cuisine: 'Indian', cookingTime: 30 },
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
