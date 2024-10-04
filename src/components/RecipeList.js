import React, { useState } from 'react';

const RecipeList = ({ recipes, selectRecipe, onAddNew }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-list">
      <button 
        onClick={onAddNew} 
        className="bg-green-500 text-white px-4 py-2 mb-4"
      >
        Add New Recipe
      </button>
      <input
        type="text"
        placeholder="Search by ingredients or cuisine"
        className="border p-2 my-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li
            key={recipe.id}
            className="cursor-pointer p-2 border-b hover:bg-gray-100"
            onClick={() => selectRecipe(recipe)}
          >
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
