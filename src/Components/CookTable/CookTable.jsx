

const CookTable = ({cookTable}) => {
    const{recipe_name, preparing_time, calories} = cookTable;
    return (
        <div>
{/*                                 
<h3>Name:{recipe_name}</h3>
<h3>Time:{preparing_time}</h3>
h3>Calories:{calories}</h3>
<button>Preparing</button> */}
                                
<table>
    <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th></th>
    
        </tr>
    </thead>
        <tbody>
            <tr>
                <td>{1}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <button>Preparing</button>
                
            </tr>
            
    </tbody>
</table>
</div>
    );
};

export default CookTable;