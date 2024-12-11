import  { ChangeEvent, FC, useState } from "react";
import { Button, TextField } from "@mui/material";
import { addTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../hooks/redux";

const TodoForm: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const addTodoHandler = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    } else {
      setError("Field is required");
    }
  };

  const addTodoKeyHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key == 'Enter')
      addTodoHandler()
  }

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(null);
  };

  return (
    <div className="todo-form">
      <TextField
        value={inputValue}
        onChange={onChangeInputHandler}
        onKeyDown={addTodoKeyHandler}
        id="standard-helperText"
        label="enter value"
        variant="standard"
        error={!!error}
        helperText={error}
      />
      <Button
        className="btn"
        variant="contained"
        onClick={addTodoHandler}
        color="primary"
        size="small"
      >
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
