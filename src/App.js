import React, { useState } from 'react';
import './App.css';
import RecipeDetails from './RecipeDetails'; // Import RecipeDetails
import RecipeForm from './RecipeForm'; // Import RecipeForm

const initialRecipes = [
  {
    title: 'Spaghetti Bolognese',
    image: 'https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36-720x720.jpg',
    ingredients: ['spaghetti', 'ground beef', 'tomato sauce'],
    instructions: 'Cook spaghetti and mix with sauce.',
},
{
    title: 'Chicken Curry',
    image: 'https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2.jpg',
    ingredients: ['chicken', 'curry powder', 'coconut milk'],
    instructions: 'Cook chicken with curry spices.',
},
{
    title: 'Grilled Cheese Sandwich',
    image: 'https://creativescookery.com/wp-content/uploads/2024/04/Ground-Beef-Grilled-Cheese-Sandwich-1.webp',
    ingredients: ['bread', 'cheese', 'butter'],
    instructions: 'Grill bread with cheese.',
},
{
    title: 'Pancakes',
    image: 'https://www.foodandwine.com/thmb/HVbJsZlSG7BQF1mif2Z5tZICM8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Buttermilk-Pancakes-FT-RECIPE1222-5589088e52c94e6f8a610b4393196fbb.jpg',
    ingredients: ['flour', 'milk', 'eggs'],
    instructions: 'Mix ingredients and cook on a skillet.',
},
{
    title: 'Tacos',
    image: 'https://mojo.generalmills.com/api/public/content/GmHhoT5mr0Sue2oMxdyEig_webp_base.webp?v=868009f1&t=e724eca7b3c24a8aaa6e089ed9e611fd',
    ingredients: ['tortillas', 'meat', 'vegetables'],
    instructions: 'Fill tortillas with ingredients.',
},
];

function Recipe({ recipe, onClick }) {
    return (
        <div className="recipe" onClick={onClick}>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h2 className="recipe-title">{recipe.title}</h2>
        </div>
    );
}

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [recipes, setRecipes] = useState(initialRecipes); // Use state for recipes
    const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const handleClose = () => {
        setSelectedRecipe(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleAddRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]);
    };

    return (
        <div className="App">
            <header className="header">
                <h1>My Recipe Book</h1>
                <div className="add-recipe">
                    <button onClick={() => setIsFormVisible(true)} className="add-recipe-button">➕</button> {/* Plus sign */}
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-bar" // Styling class for search bar
                    />
                </div>
            </header>
            <div className="recipe-grid">
                {filteredRecipes.map((recipe, index) => (
                    <Recipe key={index} recipe={recipe} onClick={() => handleRecipeClick(recipe)} />
                ))}
            </div>
            {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onClose={handleClose} />}
            {isFormVisible && (
                <RecipeForm onAddRecipe={handleAddRecipe} onClose={() => setIsFormVisible(false)} />
            )}
        </div>
    );
}

export default App;
