function TodoRowItem(props) {

    return (
        <tr onClick={() => props.deleteTask(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem