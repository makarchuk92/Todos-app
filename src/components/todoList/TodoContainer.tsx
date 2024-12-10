import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

const TodoContainer = () => {

  return (
    <div  className="todo-container">
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </div>
  )
}

export default TodoContainer