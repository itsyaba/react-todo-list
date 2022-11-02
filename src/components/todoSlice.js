import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

const todoSlice = createSlice({
          name: 'newTodo' , 
          initialState , 
          reducers: {

          }
})

export default todoSlice.reducer