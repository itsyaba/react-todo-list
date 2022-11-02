import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../components/todoSlice'


export const store = configureStore({
          reducer: {
                    newTodo: todoSlice ,
          }
})