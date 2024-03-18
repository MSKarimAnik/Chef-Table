import CookTable from "../CookTable/CookTable";




const CookTables = ({cookTables}) => {
    return (
        <div>

            {/* Recipe card section: The Right side of the page */}
            <div className=" border-2 bg-gray-400">
            <h5 className="text-center">Want to Cook : {cookTables.length}</h5>
            {
                cookTables.map((cookTable, idx ) => <CookTable key = {idx} cookTable={cookTable}></CookTable>)
            }
            
            </div>
        </div>
    );
};

export default CookTables;