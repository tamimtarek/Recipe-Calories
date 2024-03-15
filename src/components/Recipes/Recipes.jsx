import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = ({handleCooking}) => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('Recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleCooking={handleCooking} ></Recipe>)
            }
        </div>
    );
};


export default Recipes;