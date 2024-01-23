import { useState } from 'react'
import './App.css'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoList } from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <AddTodoForm/> */}
      <TodoList/>
    </>
  )
}

export default App
