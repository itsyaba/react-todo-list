import React, { useState, useRef } from "react";
import styled from "styled-components";

import Checkbox from "@mui/material/Checkbox";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import RadioButtonUncheckedSharpIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { NewReleasesTwoTone } from "@mui/icons-material";

function Header({ todoList, setTodoList, theme, setTheme }) {
  const [newTask, setNewTask] = useState("");
  const todoNameRef = useRef();
  let newName;

  const SubmitHandeler = (event) => {
    if (newTask !== "" && newTask !== false) {
      if (event.key === "Enter") {
        setTodoList((prevTodo) => {
          return [
            ...prevTodo,
            {
              task: newTask,
              completed: false,
              id: Math.round(Math.random() * 1000000),
            },
          ];
        });
        setNewTask("");
      }
    }
  };

  const handelAddTodo = (e) => {
    newName = e.target.value;
    if (newName !== " " && newName !== "") {
      setNewTask(newName);
    } else {
      setNewTask(null);
    }
  };

  return (
    <Container state={theme}>
      <NavBar>
        <h1>todo</h1>
        <Icon onClick={() => setTheme(!theme)}>
          {theme ? <NightlightRoundSharpIcon /> : <LightModeSharpIcon />}
        </Icon>
      </NavBar>
      <TodoForm color={theme}>
        <Checkbox
          icon={<RadioButtonUncheckedSharpIcon />}
          checkedIcon={<CheckCircleSharpIcon />}
          checked={false}
        />
        <Input
          type="text"
          placeholder="Create a new todo"
          color={theme}
          value={newTask}
          onChange={(e) => handelAddTodo(e)}
          onKeyDown={SubmitHandeler}
        />
      </TodoForm>
    </Container>
  );
}

const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60vw;
  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 10px;
  padding-top: 70px;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    width: 70vw;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    width: 80vw;
  }

  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 37vh;
  text-align: center;
  margin: 0 auto;
  color: white;
  background-image: ${(props) =>
    props.state
      ? "url(images/bg-desktop-light.jpg)"
      : "url(images/bg-desktop-dark.jpg)"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: all ease 0.2;

  @media (max-width: 600px) {
    background-image: ${(props) =>
      props.state
        ? "url(images/bg-mobile-light.jpg)"
        : "url(images/bg-mobile-dark.jpg)"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const Icon = styled.button`
  background-color: unset;
  border: none;
  color: white;
  cursor: pointer;
  transform: rotate(-20deg);
  transition: all ease-in 0.3s;

  &:hover {
    transform: rotate(320deg);
  }

  &:active {
    transform: scale(2);
  }
`;

const TodoForm = styled.div`
  background-color: ${(props) =>
    props.color ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)"};
  width: 40vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-radius: 4px;

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

const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 15px;
  margin: 0;
  font-size: 18px;
  width: 100%;
  color: ${(props) => (props.color ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)")};

  &:focus {
    outline: none;
  }


`;

export default Header;
