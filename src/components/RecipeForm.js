import React, { useState } from 'react';
import  '../App.css';

const RecipeForm = ({ recipe, saveRecipe }) => {
  const [formData, setFormData] = useState(
    recipe || { title: '', ingredients: '', instructions: '', cuisine: '', cookingTime: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveRecipe(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Recipe Title"
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        className="border p-2 w-full mt-2"
      />
      <textarea
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        placeholder="Instructions"
        className="border p-2 w-full mt-2"
      />
      <input
        type="text"
        name="cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        placeholder="Cuisine Type"
        className="border p-2 w-full mt-2"
      />
      <input
        type="number"
        name="cookingTime"
        value={formData.cookingTime}
        onChange={handleChange}
        placeholder="Cooking Time (mins)"
        className="border p-2 w-full mt-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-4">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;
