import React from 'react';

const RecipeDetails = ({ recipe, onClose }) => {
    return (
        <div className="recipe-details-overlay" onClick={onClose}>
            <div className="recipe-details" onClick={(e) => e.stopPropagation()}>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} className="recipe-image-large" />
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <p>{recipe.instructions}</p>
                <button className="close-button" onClick={onClose}>✖</button>
            </div>
        </div>
    );
};

export default RecipeDetails;
