import React from 'react';

const RecipeDetail = ({ recipe, handleDelete, handleEdit }) => {
  if (!recipe) return <p className="text-center">Select a recipe to view details</p>;

  return (
    <div className="recipe-detail p-4 border">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
      <h3 className="font-semibold mt-4">Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3 className="font-semibold mt-4">Instructions</h3>
      <p>{recipe.instructions}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2" onClick={() => handleEdit(recipe)}>Edit</button>
        <button className="bg-red-500 text-white px-4 py-2 ml-2" onClick={() => handleDelete(recipe.id)}>Delete</button>
      </div>
    </div>
  );
};

export default RecipeDetail;
