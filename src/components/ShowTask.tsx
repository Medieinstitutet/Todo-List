import { Task } from "../models/Task"

interface IShowTask {
    task: Task;
    completeTask: (id: number) => void;
};

export const ShowTask = (props: IShowTask) => {

    const handleClick = () => {
        props.completeTask(props.task.id)
    };

    return (
        <>
        <ul>
            <li onClick={handleClick} className={props.task.completed ? "completed" : ""}>{props.task.name}</li>
        </ul>
        </>
    );
};