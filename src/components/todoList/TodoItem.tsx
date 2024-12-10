import React from 'react'
import { Checkbox, IconButton, Paper } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { changeStatusTodo, removeTodo } from '../../store/todoSlice';



const label = { inputProps: { "aria-label": "Checkbox demo" } };

type PropsType = {
  id: string;
  title: string;
  isDone: boolean;
};

const TodoItem = (props: PropsType) => {
    const dispatch = useAppDispatch();
  return (
    <div>
         <Paper elevation={5}>
        <li id={props.id}>
          <div className="todo-tasks">
            <Checkbox
              {...label}
              checked={props.isDone}
             onChange={() => dispatch(changeStatusTodo(props.id))}
            />
            <h3>{props.title}</h3>
            <IconButton
              aria-label="delete"
             onClick={() => dispatch(removeTodo(props.id))}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </li>
      </Paper>
    </div>
  )
}

export default TodoItem