import { useAppSelector } from '../../hooks/redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const {todos, filter} = useAppSelector((state) => state.todos)
    const filterTodos = todos.filter((todo) => {
        if(filter === 'active') return !todo.isDone
        if(filter === 'completed') return todo.isDone
        return true
    })
  return (
    <ul>
        {filterTodos.map((task) => {
            return (
                <TodoItem 
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                />
            )
        })}
    </ul>
  )
}

export default TodoList