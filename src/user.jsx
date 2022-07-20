import Table from "./table";
const User = ()=> {
const userHeader = ["Name", "Age", "Address"]
const userData = [{name: "shubham", age: 23, address: "Bhopal"}, {name: "shubham1", age: 23, address: "Bhopal"},
{name: "shubham2", age: 23, address: "Bhopal"},{name: "shubham3", age: 23, address: "Bhopal"}];
    return (
        <div>
            <Table header={[...userHeader]} data= {[...userData]}/>
        </div>
    )
}
export default User