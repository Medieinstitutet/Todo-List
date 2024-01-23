import { useState } from "react"
import { Task } from "../models/Task"
import { ShowTask } from "./ShowTask"

export const TodoList = () => {

    const [tasks, setTasks] = useState<Task[]>([
        new Task(Math.random(), "Buy groceries", false),
        new Task(Math.random(), "Go to dance class", false),
        new Task(Math.random(), "Book appointment at the dentist", false)
    ]);

    const changeTask = (id: number) => {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, completed: true}
            } else {
                return task;
            }
        }))
    };

    return (
        <>
        <h3>To do List</h3>

        {tasks.map((task) => {
            return <ShowTask task = {task} completeTask={changeTask} key={task.id} />
        })}
        
        </>
    )
}