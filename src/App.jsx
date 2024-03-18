
import { useState } from 'react'
import './App.css'
import Bannar from './Components/Bannar/Bannar'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import CookTables from './Components/CookTables/CookTables'

function App() {

const [cookTables, setCookTables] = useState([]);

// const handleAddToCookTable = recipe =>{
// const newCookTables =[...cookTables, recipe]
// setCookTables(newCookTables);
// }
  const handleAddToCookTable = recipe => {
    // Check if the recipe is already in cookTables
    const isRecipeSelected = cookTables.some(cookTable => cookTable.recipe_id === recipe.recipe_id);
    
    if (!isRecipeSelected) {
        const newCookTables = [...cookTables, recipe];
        setCookTables(newCookTables);
    } else {
        // Show toast message indicating that the recipe is already selected
        alert('This recipe is already selected.');
    }
}

  

  return (
    <>
      <Header></Header>
      <Bannar></Bannar>
      <div className="flex justify-between" >
      <Recipes handleAddToCookTable={handleAddToCookTable}></Recipes>
      <CookTables cookTables={cookTables}></CookTables>
      </div>
      
    </>
  )
}

export default App
