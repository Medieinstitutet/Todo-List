import { useState } from "react"
import { Task } from "../models/Task"
import { AddTodoForm } from "./AddTodoForm";
import { ShowTask } from "./ShowTask"

export const TodoList = () => {

    const [tasks, setTasks] = useState<Task[]>( 
        (JSON.parse(localStorage.getItem("task") || "[]"))
        );

    const AddANewTask = (theNewTask: string) => {
        const ntask = new Task(Date.now(),theNewTask, false);
        setTasks((prevtasks) => {
            const newtasks = [...prevtasks, ntask]
            localStorage.setItem("task", JSON.stringify(newtasks))
            return newtasks;
        })
    }

    const changeTask = (id: number) => {
        setTasks((prevtasks) => {
            const changedtasks = prevtasks.map((task) => {
            if(task.id === id) {
                return {...task, completed: !task.completed}   
            } else {
                return task;
            }   
        });

        localStorage.setItem("task", JSON.stringify(changedtasks));
        return changedtasks;
        });
    };

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