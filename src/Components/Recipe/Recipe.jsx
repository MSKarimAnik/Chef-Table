

const Recipe = ({recipe, handleAddToCookTable}) => {
    const{recipe_image, recipe_name, short_description, ingredients,  preparing_time, calories}= recipe;
    
   

    return (
        <div>
            <img className="w-[300px] h-[200px] rounded-xl" src={recipe_image} alt="" />
            <p>{recipe_name}</p>
            <p>{short_description}</p>
            <p>{preparing_time}</p>
            <p>ingredients:{ingredients.length}</p>
            <p>
                {
                   ingredients.map((ingredient, idx) =><span key={idx}> <li>{ingredient}</li></span>) 
                }
            </p>
            <p>{calories}</p>
            <button onClick={()=>handleAddToCookTable(recipe)}
            className="btn rounded-xl bg-green-400">Want to Cook</button>
            
            

            

        </div>
    );
};

export default Recipe;