import React, { useState } from 'react';

const RecipeForm = ({ onAddRecipe, onClose }) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const ingredientsArray = ingredients.split(',').map(ingredient => ingredient.trim());
        onAddRecipe({ title, image, ingredients: ingredientsArray, instructions });
        onClose();
    };

    return (
        <div className="recipe-form-overlay">
            <div className="recipe-form">
                <h2>Add New Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Image URL:</label>
                        <input 
                            type="text" 
                            value={image} 
                            onChange={(e) => setImage(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Ingredients (comma separated):</label>
                        <input 
                            type="text" 
                            value={ingredients} 
                            onChange={(e) => setIngredients(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Instructions:</label>
                        <textarea 
                            value={instructions} 
                            onChange={(e) => setInstructions(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
                <button className="close-button" onClick={onClose}>✖</button>
            </div>
        </div>
    );
};

export default RecipeForm;
