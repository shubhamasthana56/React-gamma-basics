import { useState } from "react";

const List = ()=> {
    const arr = ["Item", "Item", "Item", "Item"];
    const [list, setList] = useState(arr)
    const handleAddItem = ()=> {
        setList([...list,"Item"])
    }
    
    return (
        <div>
        <ul>
            <li>Test</li>
            {list.map((value, i)=> {
                return (
                    <li>{`${value} ${i+1}`}</li>
                )
            })}            
        </ul>
        <button onClick={handleAddItem}>Add More Items</button>
    </div>
    )
   
}
export default List;