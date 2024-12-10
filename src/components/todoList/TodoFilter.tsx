import { Button } from '@mui/material'
import React from 'react'
import { changeFilterTodo } from '../../store/todoSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const TodoFilter = () => {
    const dispatch = useAppDispatch();
    const {filter} = useAppSelector(state => state.todos)
  return (
    <div className="filter-btn">
      <Button
        className={filter === 'all' ? 'active-filter' : "btn"}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(changeFilterTodo("all"))}
      >
        All
      </Button>
      <Button
        className={filter === 'active' ? 'active-filter' : "btn"}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(changeFilterTodo("active"))}
      >
        Active
      </Button>
      <Button
        className={filter === 'completed' ? 'active-filter' : "btn"}
        variant="contained"
        color="primary"
        size="small"
        onClick={() => dispatch(changeFilterTodo("completed"))}
      >
        Completed
      </Button>
    </div>
  )
}

export default TodoFilter