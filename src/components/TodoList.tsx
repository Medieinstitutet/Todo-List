import { useState } from "react"
import { Task } from "../models/Task"
import { AddTodoForm } from "./AddTodoForm";
import { ShowTask } from "./ShowTask"

export const TodoList = () => {

    const [tasks, setTasks] = useState<Task[]>([
        new Task(1, "Buy groceries", false),
        new Task(2, "Go to dance class", false),
        new Task(3, "Book appointment at the dentist", false)
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

    const AddANewTask = (theNewTask: string) => {
        setTasks([...tasks, new Task(Date.now(),theNewTask, false)])


    }

    return (
        <>
        <h2>To do List</h2>
        <AddTodoForm addTodoForm={AddANewTask}/>

        {tasks.map((task) => {
            return <ShowTask task = {task} completeTask={changeTask} key={task.id} />
        })}
        
        </>
    )
}