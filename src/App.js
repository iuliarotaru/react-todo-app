/* @jsxImportSource @emotion/react */ import React from "react";
import { v4 as uuidv4 } from "uuid";
import { jsx, css } from "@emotion/react";
import "./styles.css";
import { FaTrashAlt } from "react-icons/fa";
import * as TodoStyled from "./TodoStyled";

function Todos() {
  const [todos, setTodos] = React.useState([
    {
      id: uuidv4(),
      text: "Creat a Todo app",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Dinner with mum",
      completed: false,
    },
  ]);
  //Complete a todo
  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  //Remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //Add a todo
  const addTodo = (todo) => {
    const id = uuidv4();
    const newTodo = { id, text: todo, completed: false };
    setTodos([newTodo, ...todos]);
  };
  //Show current date
  const showCurrentDate = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString("en-us", { month: "long" });
    const dayNumber = currentDate.getUTCDate();
    const dayName = currentDate.toLocaleString("en-us", { weekday: "long" });
    return `${dayName}, ${dayNumber} ${month}`;
  };
  return (
    <TodoStyled.Main>
      <h1
        css={css`
          margin: 0;
        `}
      >
        {showCurrentDate()}
      </h1>
      <CreateTodo onCreate={addTodo} />
      <TodoStyled.Ul>
        {todos.length > 0
          ? todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggleComplete={() => completeTodo(todo.id)}
                onRemove={() => removeTodo(todo.id)}
              />
            ))
          : "You have no tasks."}
      </TodoStyled.Ul>
    </TodoStyled.Main>
  );
}

function Todo({ id, text, completed, onRemove, onToggleComplete }) {
  return (
    <TodoStyled.Li style={{ background: completed ? "#5088B8" : "#0D2A43" }}>
      <TodoStyled.InputCheckbox
        type="checkbox"
        onChange={onToggleComplete}
        defaultChecked={completed ? "checked" : ""}
      />
      <div
        style={{ textDecoration: completed ? "line-through" : "" }}
        css={css`
          margin: 0 1rem;
        `}
        id={id}
      >
        {text}
      </div>
      <TodoStyled.Button onClick={onRemove}>
        <span
          css={css`
            margin-right: 0.5rem;
          `}
        >
          Remove
        </span>
        <FaTrashAlt />
      </TodoStyled.Button>
    </TodoStyled.Li>
  );
}

function CreateTodo({ onCreate }) {
  //Input state
  const [text, setText] = React.useState("");
  //Error state
  const [error, setError] = React.useState("");
  //Verify
  const onSubmitTodo = (event) => {
    event.preventDefault();
    if (!text) {
      setError("You can't add empty todo. Please try again.");
      return;
    }
    onCreate(text);
    setText("");
    setError("");
  };
  return (
    <form
      onSubmit={onSubmitTodo}
      css={css`
        margin-top: 3rem;
      `}
    >
      <TodoStyled.InputText
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <TodoStyled.InputSubmit type="submit" value="Add task" />
      <p>{error}</p>
    </form>
  );
}

export default function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}
