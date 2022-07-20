import Table from "./table";
const Employee = ()=> {
    const employeeHeader = ["EMPLOYEE", "Designation"]
    const employeeData = [{employee: "shubham", designation: "sde"}, {employee: "shubham1", designation: "sde-3"} ,
    ];
        return (
            <div>
                <Table header={employeeHeader} data={employeeData}/>
            </div>
        )
    }
    export default Employee;