export const Table = ({columns, data, deleteHandler}) => {
    return (
        <table>
            <thead>
            <tr>
                {columns.map(column => {
                    return <td key={column.label}>{column.label}</td>
                })}
            </tr>
            </thead>
            <tbody>
            {data.map(item => {
                return <tr key={item.id}>
                    {
                        columns.map(column => {
                            if(column.label === "Actions") {
                                return <td key="actions-cell" onClick={() => deleteHandler(item.id)}>Delete</td>
                            }
                            return <td key={`${column.dataField}-cell`}>{item[column.dataField]}</td>
                        })
                    }
                </tr>
            })}
            </tbody>
        </table>
    )
}