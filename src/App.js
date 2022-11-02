import './App.css';
import Header from './components/Header'
import TodoList from './components/TodoList'
import { useState } from 'react'
import styled from 'styled-components'

import {useSelector} from 'react-redux'

function App() {

  const todolistss = useSelector(state => state.newTodo)

  const dummyText = [
    {

      task: "clean the House",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "Read for one hour",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "Pick up groceries",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "Complete Todo App on Front End Mentor",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "learn javascript",
      completed: true,
      id: Math.round(Math.random() * 1000000),
    }
  ]
  const [todoList, setTodoList] = useState([
    {

      task: "clean the House",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "Read for one hour",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "Pick up groceries",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "Complete Todo App on Front End Mentor",
      completed: false,
      id: Math.round(Math.random() * 1000000),
    },
    {
      task: "learn javascript",
      completed: true,
      id: Math.round(Math.random() * 1000000),
    }
  ]); 
  const [theme, setTheme] = useState(true);

console.log(todoList , dummyText)

  return (
    <Parent color={theme}>
      <Header todoList={todoList} setTodoList={setTodoList} theme={theme} setTheme={setTheme} />
      <TodoList todoList={todoList} setTodoList={setTodoList} theme={theme} />
    </Parent>
  );
}

const Parent = styled.div`
  background-color: ${(props) =>
  props.color ? "#fafafa" : "hsl(235, 24%, 19%)"};
    height : 100vh;
`

export default App;
