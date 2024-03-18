import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";



const Recipes = ({handleAddToCookTable}) => {
    const [recipes, setRecipes]=useState([]);

    useEffect(()=>{
        fetch ('Recipes.json')
        .then(res => res.json())
        .then((data)=>setRecipes(data))
    }, [])
    
    return (
        <div className="w-full">
            <div >
            <h1>Ou r Recipes</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />
            urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
        {/* Recipe card section: The left side of the page */}
        <div className=" text-left">
            <div className=" grid grid-cols-2 gap-2 border-3 ">
                
                {
                    recipes.map(recipe=><Recipe key={recipe.recipe_id} recipe={recipe} handleAddToCookTable={handleAddToCookTable}></Recipe>)
                    
                }            
        </div>

</div>
        
        </div>
    );
};

export default Recipes;