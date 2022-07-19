///input tag
//onChange
const Input = ()=> {
    const handleChange = (event)=> {
        console.log(event, event.target, event.target.value)
    }
    return (
        <div>
            <input type="number"  onChange={(e)=> {handleChange(e)}}></input>
            <select onChange={(e)=> {handleChange(e)}}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
        </div>
    )
}
export default Input;