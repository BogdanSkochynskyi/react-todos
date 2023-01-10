function TodoRowItem() {

    const rowNumber = 1;
    const rowDescription = "Task 1";
    const rowAssigned = "Bogdan";

    return (
        <tr>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem