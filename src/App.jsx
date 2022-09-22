import React from "react";
import "./App.css";
import { TodoForm, TodoList } from './components/Todo'
import Nav from './components/Navbar'
import {
  Routes,
  Route
} from "react-router-dom";

function Landing() {
  return (
  <>
Welcome to our awesome 311 app.
  </>
  )
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/list" element={
          <TodoList completeTodo={completeTodo} removeTodo={removeTodo} todos={todos} />
        } />
        <Route path="/add" element={<TodoForm addTodo={addTodo} />} />
        {/* add chart */}
      </Routes>
    </>
  );
}

export default App;