import { useState } from "react"
import { Task } from "../models/Task"
import { AddTodoForm } from "./AddTodoForm";
import { ShowTask } from "./ShowTask"

export const TodoList = () => {

    const [tasks, setTasks] = useState<Task[]>( 
        (JSON.parse(localStorage.getItem("task") || "[]"))
        );

    const changeTask = (id: number) => {
        setTasks(tasks.map((task) => {
            if(task.id === id) {
                return {...task, completed: !task.completed}
            } else {
                return task;
            }    
        }))
    };

    const AddANewTask = (theNewTask: string) => {
        const ntask = new Task(Date.now(),theNewTask, false);
        setTasks(prevtasks => [...prevtasks, ntask])

        localStorage.setItem("task", JSON.stringify([...tasks, ntask]));

        const todo = localStorage.getItem("task");

        if(todo) {
        const todoAsObject = JSON.parse(todo)
        setTasks(todoAsObject)
        }
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