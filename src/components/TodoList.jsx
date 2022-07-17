import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactSortable, swap } from "react-sortablejs";

import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedSharpIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { active } from "sortablejs";
import { Filter } from "@mui/icons-material";

function TodoList({ todoList, setTodoList, theme }) {
  const [filteredTodo, setFilteredTodo] = useState([...todoList]);
  const [todo , setTodo] = useState([])
  const [todoLength, setTodoLength] = useState(4);
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState("all");
  let newTodo;

  useEffect(() => {
    lengthHandeler();
  }, [checked, todoList]);

  useEffect(() => {
    deleteHandeler();
  }, []);

  useEffect(() => {
    FilterByLink();
  }, [status , todoList]);

  const FilterByLink = () => {
    let CopiedTodo = [...filteredTodo];
    if (status === "all") {
      setTodo(todoList);
    } else if (status === "completed") {
      setTodo(todoList.filter((comp) => comp.completed === true));
    } else if (status === "active") {
      setTodo(todoList.filter((comp) => comp.completed === false));
    }else{
      setTodo(todoList)
    }
  };

  const lengthHandeler = () => {
    newTodo = todoList.filter((el) => el.completed === false);
    setTodoLength(newTodo.length);
  };

  const removeCompleted = () => {
    setTodoList(todoList.filter((com) => com.completed === false));
  };

  const toggleTodo = (id) => {
    const newTodo = [...todoList];
    const Todo = newTodo.find((todo) => todo.id === id);
    Todo.completed = !Todo.completed;
    setChecked(Todo.completed);
    setTodoList(newTodo);
  };

  const deleteHandeler = (id) => {
    const newTodo = [...todoList];
    const deleteHandelerTodo = newTodo.filter((element) => element.id !== id);
    setTodoList(deleteHandelerTodo);

  };

  return (
    <ListContainer color={theme}>
      <ReactSortable
        list={todoList}
        setList={setTodoList}
        tag={"ul"}
        className={theme ? "ul" : "ul dark"}
      >
        {todo.map((todo) => (
          <TodoForm key={todo.id} color={theme}>
            <Checkbox
              icon={<RadioButtonUncheckedSharpIcon />}
              checkedIcon={<CheckCircleSharpIcon />}
              checked={todo.completed}
              onClick={() => toggleTodo(todo.id)}
            />
            <List
              color={theme}
              className={todo.completed ? "list linethrough" : "list "}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.task}
            </List>
            <RemoveBtn
              className="removeBtn"
              onClick={() => deleteHandeler(todo.id)}
            >
              <img src="images/icon-cross.svg" alt="remove" />
            </RemoveBtn>
          </TodoForm>
        ))}
        <FooterList color={theme}>
          <p>{todoLength} item left </p>
          <NavBar color={theme}>
            <Links onClick={() => setStatus("all")}>All</Links>
            <Links onClick={() => setStatus("active")}>Active</Links>
            <Links onClick={() => setStatus("completed")}>Completed</Links>
          </NavBar>
          <ClearBtn onClick={removeCompleted}>Clear Completed</ClearBtn>
        </FooterList>
      </ReactSortable>
      <Footer color={theme}>
        <p>Drag and drop to reorder list.</p>
        <p>
          Challenge by{" "}
          <a href="https://frontendmentor.io/" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/itsyaba/"
            target="_blank"
          >
            itsyaba.
          </a>
        </p>
      </Footer>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  border-radius: 4px;
  background-color: ${(props) =>
    props.color ? "#fafafa" : "hsl(235, 24%, 19%)"};
`;

const TodoForm = styled.li`
    background-color: ${(props) =>
    props.color ? "#fafafa" : "hsl(235, 24%, 19%)"};
  width: 40vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-bottom: 0.2px solid hsla(233, 14%, 35%, 0.3);
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 900px) {
    width: 70vw;
  }

  @media (max-width: 700px) {
    width: 80vw;
  }

  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const FooterList = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.color ? "#fafafa" : "hsl(235, 24%, 19%)"};
  width: 40vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.2px solid hsla(233, 14%, 35%, 0.3);
  border-radius: 5px;
  padding: 0 10px;
  opacity: 0.6;
  height: 60px;
  border: none;
  color: hsl(236, 9%, 61%);

  @media (max-width: 900px) {
    width: 70vw;
  }

  @media (max-width: 700px) {
    width: 80vw;
  }

  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const NavBar = styled.div`
  @media (max-width: 500px) {
    position: absolute;
    top: 130%;
    left: 1%;
    right: 1%;
    height: 60px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) =>
      props.color ? "white" : "hsl(235, 24%, 19%)"};
    box-shadow: 0px 5px 50px -15px rgba(194, 195, 214, 0.5);
  }
`;

const Links = styled.button`
  border: none;
  background-color: unset;
  cursor: pointer;
  padding: 0 5px;
  transition: all ease 0.2s;
  font-weight: 700;
  color: hsl(236, 9%, 61%);

  &:hover {
    color: blue;
    opacity: 1;
  }
`;

const ClearBtn = styled(Links)`
  font-weight: 400;
`;

const List = styled.span`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.color ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)")};
  padding: 15px;
  margin: 0;
  font-size: 18px;
  width: 100%;
  list-style: none;
`;

const RemoveBtn = styled.button`
  opacity: 0;
  margin-right: 5px;
  background-color: transparent;
  border: none;
  margin-right: 18px;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top:10px;
  color: ${(props) => (props.color ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)")};

  @media (max-width: 500px) {
    margin-top: 100px;
  }
`;

export default TodoList;
