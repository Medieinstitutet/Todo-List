import { ChangeEvent, useState } from "react";

interface IAddTodoProps {
    addTodoForm: (theNewTask: string) => void;
}

export const AddTodoForm = (props: IAddTodoProps) => {
    const [newTask, setNewTask] = useState("");

    const handleClick = () => {
        props.addTodoForm(newTask);
        setNewTask("");
    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    return (
        <>
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={handleClick}>Add task</button>
        </>
    )
}