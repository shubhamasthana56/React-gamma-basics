const Table = (props)=> {
    console.log(props.header, props.data);
    const getTableData = (data)=> {
        return props.header.map((key)=> {
            return <td>{data[key.toLowerCase()]}</td>
        })
    }
    return (
        <div>
            <table>
                    <thead>
                    {props.header.map((key)=> {
                        return (
                            <th>{key}</th>
                        )
                    })}
                    </thead>
                    <tbody>
                        {props.data.map((user)=> {
                            return (
                                <tr>
                                    {getTableData(user)}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}
export default Table;