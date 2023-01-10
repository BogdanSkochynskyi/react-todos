import React, {useState} from "react";

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTask = () => {
        if (description !== '' && assigned !== '') {
            props.addTask(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                        ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea 
                        className="form-control" 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        ></textarea>
                </div>
                <button 
                    type="button" 
                    className="btn btn-primary mt-3" 
                    onClick={submitTask}
                    >Add task</button>
            </form>
        </div>
    )

}

export default NewTodoForm